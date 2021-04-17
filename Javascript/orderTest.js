import * as c from "./order.js";

let fries = [];

let order1 = c.friesOrder(c.sauceEnum.special, c.sizeEnum.family);
let order2 = c.friesOrder(c.sauceEnum.mayo, c.sizeEnum.medium);
let order3 = c.friesOrder(c.sauceEnum.ketchup, c.sizeEnum.small);

fries.push(order1);
fries.push(order2);
fries.push(order3);

c.order(fries);