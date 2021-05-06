import * as e from "./enums.js";
/**
 * Dit is een pure functie, aangezien dezelfde
 * parameters steeds hetzelfde object zullen
 * retourneren. 
 */

function friesOrder(sauce, size) {
    let checkOrder = friesParamsCheck(sauce, size);
    console.log(checkOrder);
    if (!checkOrder.state) {
        console.error(checkOrder.message);
        return null;
    }
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

function friesParamsCheck(sauce, size) {
    try {
        let sauceCheck = e.sauceEnum[sauce.name];
        let sizeCheck = e.sizeEnum[size.name];
        return {
            state: true,
            sauce: sauceCheck,
            size: sizeCheck
        };
    } catch (err) {
        return {
            state: false,
            message: "The sauce and size must be an instance of the 'sauceEnum' or 'sizeEnum' object. (ex: e.sauceEnum.ketchup)"
        };
    }
}

function order(orderList) {
    let cost = 0;
    let time = 0;
    let description = "Your order contains: ";
    let message = "";
    //let currentState = "new NotOrderedState()";
    let orderListLength = orderList.length;
    for (let order of orderList) {
        if (order !== null) {
            cost += order.cost;
            time += order.time;
            description += order.description;
            if (orderListLength - 1 !== 0)
                description += ", ";
        } else {
            console.log(" ** Your order should not contain a nullified object.");
            description += "null";
        }
        orderListLength--;
    }
    message += `${description} and costs EUR${cost}. It will take ${time} seconds to complete.`;
    console.log(message);
}

export {
    friesOrder,
    order
};