/*
Write a program that:

Calculates the total cost of all products.

Ignores (skips) any product that costs less than 50 using continue.

Prints the final total.

Focus: selective iteration + aggregation using for loops and continue.
*/

const prices = [120, 85, 200, 60, 40, 300];

let total = 0;

for (let price of prices) {
  if (price < 50) continue;
  total += price;
}

console.log(total);