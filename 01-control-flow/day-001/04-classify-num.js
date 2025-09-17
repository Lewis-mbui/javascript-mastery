/*
Write a function classifyNumber(num) that:

Uses control flow to determine if a number is "Even" or "Odd".

Inside the function, if the number is negative, return "Negative numbers not allowed".

Call the function multiple times with different inputs to test it.
*/

const num = 2
console.log(classifyNumber(num));

function classifyNumber(num) {
  if (num < 0) return "Negative numbers not allowed";
  return (num % 2 === 0) ? "Even" : "Odd";
}