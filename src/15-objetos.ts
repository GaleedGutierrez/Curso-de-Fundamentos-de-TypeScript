(() => {
    type Size = 'S' | 'M' | 'L' | 'XL';
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Size
    };

    const products: Product[] = [];
    const addProduct = (data: Product) => {
        products.push(data);
    };

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
    products.push({
        title: 'Pro3',
        createdAt: new Date(),
        stock: 12,
        size: 'S'
    });
    console.log({products});
})();
