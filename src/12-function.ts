(() => {
    type Size = 'S' | 'M' | 'L' | 'XL';

    function createProductToJson (
        title: string,
        createdAt: Date,
        stock: number,
        size: Size
    ) {
        return {
            title,
            createdAt,
            stock,
            size,
        };
    }

    const createProductToJsonV2 = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Size
    ) => {
        return {
            title,
            createdAt,
            stock,
            size,
        };
    }

    const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
    const producto2 = createProductToJsonV2('P1', new Date(), 12);
    console.log({producto1, producto2});
})();
