/**
 * Dit is een pure functie, aangezien dezelfde
 * parameters steeds hetzelfde object zullen
 * retourneren. 
 */

function friesOrder(sauce, size) {
    let sauceName = sauce.name;
    let sizeName = size.name;
    let totalCost = sauce.cost + size.cost;
    let totalTime = sauce.time + size.time;
    let totalDescription = size.description + sauce.description;
    return {
        size: sizeName,
        sauce: sauceName,
        cost: totalCost,
        time: totalTime,
        description: totalDescription
    };
}

function order(orderList) {
    let cost = 0;
    let time = 0;
    let description = "Your order contains: ";
    let currentState = "new NotOrderedState()";

    for (let order of orderList) {
        if (order !== null) {
            cost += order.cost;
            time += order.time;
            description += order.description;
            //check if list has a next value, if not than skip the ", "
            //
            //if (orderList.lastIndexOf(order))
            //    description += ", ";
        } else {
            console.log(" ** Your order should not contain a nullified object.");
            description += "null";
        }
    }
    console.log(description, cost, time);
}

export {
    friesOrder,
    order
};