export interface ProductPlan {
    id: number;
    name: string;
    description: string;
    cpu: number;
    memory: number;
    swap: number;
    disk: number;
    sqlSize: number;
    ports: number;
    bandwidth: number;
    price: [number, number, number, number];
}

export interface Product {
    id: number;
    serverIp: string;
    area: string;
    name: string;
    description: string;
    plans: ProductPlan[];
}

export interface ProductChoice extends Product {
    selectedPlan: string;
}