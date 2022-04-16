(() => {
    let userId: string | number | boolean;
    userId = 1212;
    userId = 'aaa';

    function greeting (myText: string | number) {
        if (typeof(myText) === 'string') {
            console.log(`string ${myText.toLocaleLowerCase()}`);
        } else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greeting('ASDASD');
    greeting(1.2123);
})();
