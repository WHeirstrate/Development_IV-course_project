const sizes = {
  small: {
      name: "small",
      cost: 2.10,
      time: 3,
      description: "Small fries"
  },
  medium: {
      name: "medium",
      cost: 3.10,
      time: 3,
      description: "Medium fries"
  },
  family: {
      name: "family",
      cost: 5.10,
      time: 3,
      description: "Family fries"
  }
};

const sauces = {
  mayo: {
      name: "mayonnaise",
      cost: 0.70,
      time: 1,
      description: " with mayonaise"
  },
  ketchup: {
      name: "ketchup",
      cost: 0.70,
      time: 1,
      description: " with ketchup"
  },
  special: {
      name: "special",
      cost: 1.50,
      time: 2,
      description: " with special sauce"
  }
};


function getOrderNames(fries){
  return function (sauce){
  let newSauces = sauce.map(x => x.name);
   return [fries.name, ...newSauces]
  }
}

/* function getName(p){
  return p.name
} */

console.log(...getOrderNames(sizes.small)([sauces.mayo, sauces.ketchup]));
