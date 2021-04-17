import * as e from "./enums.js";
/**
 * Dit is een pure functie, aangezien dezelfde
 * parameters steeds hetzelfde object zullen
 * retourneren. 
 */

function friesOrder(sauce, size) {
    let checkOrder = friesParamsCheck(sauce, size);
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
    console.log("\n \n");
    console.log("sauce: ", sauce);
    console.log("SE: ", e.sauceEnum.special);
    if (sauce.hasOwnProperty("name"))
        sauce = e.sauceEnum.
    if(false)
    return {
        state: false,
        message: "The sauce must be an instance of the 'sauceEnum' object. (ex: e.sauceEnum.ketchup)"
    };
    if (false)
        return {
            state: false,
            message: "The size must be an instance of the 'sizeEnum' object. (ex: e.sizeEmun.small)"
        };
    return {
        state: true
    };
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