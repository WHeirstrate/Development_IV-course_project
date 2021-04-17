import * as c from "./order.js";
import * as e from "./enums.js";

let fries = [];

let order1 = c.friesOrder(e.sauceEnum.special, e.sizeEnum.family);
let order2 = c.friesOrder(e.sauceEnum.mayo, e.sizeEnum.medium);
let order3 = c.friesOrder(e.sauceEnum.ketchup, e.sizeEnum.small);

fries.push(order1);
fries.push(order2);
fries.push(order3);

c.order(fries);