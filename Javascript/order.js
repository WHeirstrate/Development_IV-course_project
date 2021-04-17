const sizeEnum = {
    small: {
        name: "small",
        cost: 2.10,
        time: 3
    },
    medium: {
        name: "medium",
        cost: 3.10,
        time: 3
    },
    family: {
        name: "family",
        cost: 5.10,
        time: 3
    }
};

const sauceEnum = {
    mayo: {
        name: "mayonnaise",
        cost: 0.70,
        time: 1
    },
    ketchup: {
        name: "ketchup",
        cost: 0.70,
        time: 1
    },
    special: {
        name: "special sauce",
        cost: 1.50,
        time: 2
    }
};

/**
 * Dit is een pure functie, aangezien dezelfde
 * parameters steeds hetzelfde object zullen
 * retourneren.
 */

function friesOrder(sauce, size) {
    let sauceName = sauce.name;
    let sizeName = size.name;
    let totalCost = sauce.cost + size.cost;
    return {
        size: sizeName,
        sauce: sauceName,
        cost: totalCost
    };
}

function order(fries) {
    console.log(fries);
}

export {
    friesOrder,
    sizeEnum,
    sauceEnum,
    order
};