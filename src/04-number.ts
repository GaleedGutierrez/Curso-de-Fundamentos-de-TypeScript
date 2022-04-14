(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log({productPrice});

    let customerAge: number = 28;
    // customerAge = customerAge + '1'; // Error
    customerAge = customerAge + 1; // Error
    console.log({customerAge});

    let productInStock: number;
    console.log({productInStock});
    // if (productInStock > 10) { // Error
    //     console.log('Is greater');
    // }

    let discount = parseInt('201');
    console.log({discount});
    if (discount <= 200) {
        console.log('apply');
    } else {
        console.log('Not apply');
    }

    let hex = 0xfff;
    let bin = 0b1010;
    console.log({hex, bin});
})()
