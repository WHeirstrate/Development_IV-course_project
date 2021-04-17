const sizeEnum = {
    small: {
        name: "small",
        price: 2.10,
        time: 3
    },
    medium: {
        name: "medium",
        price: 3.10,
        time: 3
    },
    family: {
        name: "family",
        price: 5.10,
        time: 3
    }
};

const sauceEnum = {
    mayo: {
        name: "mayonnaise",
        price: 0.70,
        time: 1
    },
    ketchup: {
        name: "ketchup",
        price: 0.70,
        time: 1
    },
    special: {
        name: "special sauce",
        price: 1.50,
        time: 2
    }
};

/**
 * Dit is een pure functie, aangezien dezelfde
 * parameters steeds hetzelfde object zullen
 * retourneren.
 */

function makeOrder(sauce, size) {
    let sauceName = sauce.name;
    let sizeName = size.name;
    return {
        size: sizeName,
        sauce: sauceName
    };
}

export {
    makeOrder,
    sizeEnum,
    sauceEnum
};