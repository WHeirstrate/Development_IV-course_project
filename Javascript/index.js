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
  }
};

const sauces = {
  mayo: {
    name: "mayonnaise",
    cost: 0.70,
    time: 1,
  },
  ketchup: {
    name: "ketchup",
    cost: 0.70,
    time: 1,
  },
  special: {
    name: "special",
    cost: 1.50,
    time: 2,
  }
};


function getOrderNames(fries) {
  return function (sauce) {
    let newSauces = sauce.map(x => x.name);
    return [fries.name, ...newSauces]
  }
}


function getDescription(p) {
  return p.map((x, i) => {
    if (i == 0 && p.length != 1)
      return x + " fries with";
    else if (p.length == 1)
      return x + " fries"
    else if (i + 1 != p.length)
      return x + " and";
    return x
  })
}

function allSauces(...sauces) {
  return sauces
}


console.log(getDescription(getOrderNames(sizes.small)(allSauces(sauces.mayo, sauces.ketchup))).join(' '));