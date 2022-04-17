(() => {
    const login = (data: {email: string, password: number}) => {
        console.log({data});
    }
    // login('galeed@galeed.ar', '1212asas');
    login({
        email:'galeed@galeed.ar',
        password: 12
    });

    type Size = 'S' | 'M' | 'L' | 'XL';
    const products: any[] = [];
    const addProduct = (data: {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Size
    }) => {
        products.push(data);
    }

    addProduct({
        title: 'Pro1',
        createdAt: new Date(),
        stock: 10,
    });
    addProduct({
        title: 'Pro1',
        createdAt: new Date(),
        stock: 10,
        size: 'XL'
    });
    console.log({products});
})();
