(() => {
    type UserID = string | number;
    let userId: UserID;

    function greeting (userId: UserID) {
        if (typeof(userId) === 'string') {
            console.log(`string ${userId.toLocaleLowerCase()}`);
        }
    }

    // Literal types
    type Size = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Size;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    shirtSize = 'S';

    function greeting2 (userId: UserID, size: Size) {
        if (typeof(userId) === 'string') {
            console.log(`string ${userId.toLocaleLowerCase()}`);
        }
    }

    greeting2(1, 'S');
    greeting2('2', 'M');
})();
