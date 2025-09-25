// Write a program that calculates the sum of all 
// even numbers between 1 and 100.

// - Use a for loop.
// - Use continue to skip odd numbers

console.log(calculateEvenSum());

function calculateEvenSum() {
  let sum = 0;

  for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) continue;
    sum += i;
  }

  return sum;
}