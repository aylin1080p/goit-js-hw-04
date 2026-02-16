const products = {
    apples: 2,
    grapes: 3,
    oranges: 5,
    bananas: 9,
    carrots: 25,
    lime: 99
};


function isEnoughCapacity(products, containerSize) {
    // valuelari toplayip size'dan buyuk mu diye kontrol edecegiz 
    let capacity = 0;
    const values = Object.values(products);

    for (let i = 0; i < values.length; i++) {
        capacity = capacity + values[i];
    }
    if (capacity <= containerSize) {
        return true;
    } else return false;
}
