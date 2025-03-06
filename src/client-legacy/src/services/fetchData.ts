import axios, { AxiosError } from 'axios';

export const backendURL = 'http://localhost:17482/api';

axios.defaults.baseURL = backendURL;
axios.defaults.withCredentials = true;

export type FetchDataSuccessResponse<T> = {
    success: true;
    data: T;
}

export type FetchDataErrorResponse = {
    success: false;
    error: string;
}

export class FetchDataResponse<T> {
    success: boolean;
    data?: T;
    error?: string;

    constructor(success: true, data: T)
    constructor(success: false, error: string)
    constructor(success: boolean, append: T | string) {
        if (success) {
            this.success = true;
            this.data = append as T;
        }
        else {
            this.success = false;
            this.error = append as string;
        }
    }
}

export const fetchData = {
    get: async <T>(url: string, data?: any): Promise<FetchDataResponse<T>> => {
        try {
            const response = await axios.get(url, { params: data });
            if (response.status !== 200 || response.data.error) {
                return new FetchDataResponse<T>(false, response.data?.message || `Error Code: ${response.status}`);
            }
            return new FetchDataResponse<T>(true, response.data);
        }
        catch (error) {
            if (error instanceof AxiosError) {
                return new FetchDataResponse<T>(false, error.response?.data.message || `Error Code: ${error.response?.status || 500}`);
            }
            return new FetchDataResponse<T>(false, (error as Error).message);
        }
    },
    post: async <T>(url: string, data?: any): Promise<FetchDataResponse<T>> => {
        try {
            const response = await axios.post(url, data);
            if (response.status !== 200 || response.data.error) {
                return new FetchDataResponse<T>(false, response.data?.message || `Error Code: ${response.status}`);
            }
            return new FetchDataResponse<T>(true, response.data);
        }
        catch (error) {
            if (error instanceof AxiosError) {
                return new FetchDataResponse<T>(false, error.response?.data.message || `Error Code: ${error.response?.status || 500}`);
            }
            return new FetchDataResponse<T>(false, (error as Error).message);
        }
    }
}