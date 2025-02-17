import { ref } from 'vue';
import { defineStore } from "pinia";
import { fetchData } from '../services/fetchData';

type LoginUser = {
    login: boolean;
    userinfo: {
        username: string;
    } | null;
};

const defaultLoginUser: LoginUser = {
    login: false,
    userinfo: null
}

export const useLoginUserStore = defineStore('loginUser', () => {
    const user = ref(defaultLoginUser);

    async function fetchLoginUser() {
        const res = await fetchData.get<LoginUser>('/me');
        if (res.success) {
            user.value = res.data ?? defaultLoginUser;
        }
    }

    async function logout() {
        const res = await fetchData.post<LoginUser>('/logout');
        if (res.success) {
            user.value = defaultLoginUser;
        }
    }

    return {
        user,
        logout,
        fetchLoginUser
    };
});