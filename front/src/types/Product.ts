export type Product = {
    id: number;
    sku: number;
    name: string;
    price: number;
    size: string;
    gender: 'male' | 'female';
    age: string;
    color: string;
    images: string[];
};