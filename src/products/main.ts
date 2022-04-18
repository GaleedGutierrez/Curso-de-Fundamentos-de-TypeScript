import { addProduct, calcStock, products } from "./product.service";

addProduct({
    title: 'Pro1',
    createdAt: new Date(),
    stock: 10,
});
addProduct({
    title: 'Pro2',
    createdAt: new Date(),
    stock: 11,
    size: 'XL'
});
addProduct({
    title: 'Pro3',
    createdAt: new Date(),
    stock: 12,
    size: 'S'
});
const total = calcStock();
console.log({products, total});

