// You’re given an object of product prices, and you want 
// to create a new object where all prices 
// are increased by 10%.

const prices = { apple: 100, banana: 60, mango: 120 };

const arr = Object.entries(prices);

const newPrices = arr.reduce((prev, product) => {
  const name = product[0];
  let price = product[1];

  price = price + (0.1 * price);

  prev[name] = price;

  return prev;
}, {});

console.log(newPrices);

/*
const newPrices = {};

const arr = Object.entries(prices);

for (product of arr) {
  const name = product[0];
  let price = product[1];

  price = price + (0.1 * price);

  newPrices[name] = price;
}

console.log(newPrices);
*/


/*
const newPrices = {...prices};

for (key in newPrices) {
  newPrices[key] += (0.1 * newPrices[key]);
}

console.log(newPrices);
*/