/*
Use reduce() to find the total cost.

Then, use it again to find the average price.
*/

const prices = [10, 25, 30, 15, 20];

const total = prices.reduce((prev, price) => {
  return prev + price;
}, 0);

console.log(total);
