/*
Write a program that checks a number and prints:

"Positive" if it’s greater than 0,

"Negative" if it’s less than 0,

"Zero" if it equals 0.
*/
const num = 2;

console.log(checkNumber(num));

function checkNumber(num) {
  if (num === 0) return "Zero";
  return (num > 0) ? "Positive" : "Negative";
}