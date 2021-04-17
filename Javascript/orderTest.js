import * as c from "./order.js";

let order = [];

let order1 = c.makeOrder(c.sauceEnum.special, c.sizeEnum.family);
let order2 = c.makeOrder(c.sauceEnum.mayo, c.sizeEnum.medium);
let order3 = c.makeOrder(c.sauceEnum.ketchup, c.sizeEnum.small);

order.push(order1);
order.push(order2);
order.push(order3);

console.log(order);