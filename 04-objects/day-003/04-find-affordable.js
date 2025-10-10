/*
Create a function findAffordableItems(items, budget) 
that takes an object of items with their prices and 
a budget, and returns a new object with only the 
items you can afford.
*/

const items = { 
  watch: 3000, 
  shoes: 1500, 
  book: 800, 
  bag: 2000 
};

console.log(findAffordableItems(items, 2000));

function findAffordableItems(items, limit) {
  const output = {};

  for (key in items) {
    if (items[key] <= limit)
      output[key] = items[key];
  }

  return output;
}

/*
function findAffordableItems(items, budget) {
  const affordable = {}; // to store the result

  for (const [item, price] of Object.entries(items)) {
    if (price <= budget) {
      affordable[item] = price;
    }
  }

  return affordable;
}
*/