// Write a program that takes an array of numbers and:

// Loops through each number.

// If the number is even, store it in a new array called evens.

// If the number is odd, store it in another array called odds.

// Print both arrays at the end.

const numbers = [23, 12, 44, 13, 11, 78 , 91, 109, 36];
const evens = [];
const odds = [];

for (number of numbers)
  (number % 2 === 0) 
    ? evens.push(number) 
    : odds.push(number);

console.log(evens);
console.log(odds);