/*
Create a function that takes an array of product 
prices and a callback function (written as an arrow function) 
that applies a discount to each price.
*/

const prices = [100, 200, 300];
const discounted = applyDiscount(prices, price => price * 0.9);
console.log(discounted);

function applyDiscount(arr, fun) {
  return arr.map(price => fun(price));
}