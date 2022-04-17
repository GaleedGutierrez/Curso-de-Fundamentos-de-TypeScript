(() => {
    let prices = [1, 2, 2, 1, 1, 212, 'hi', true, [1],];
    // prices.push(true);
    prices.push(1);
    prices = [1, 2, 4];

    let products = ['Hi', true];
    products.push(false);

    const mixed: (number | string | boolean | object)[] = ['Hi', true];
    mixed.push(12);
    mixed.push('cd');
    mixed.push(true);
    mixed.push({});
    mixed.push([]);

    let numbers = ['asd'];
    // const anotherNumber = numbers.map(item => item * 2);
    // console.log(anotherNumber);
})()
