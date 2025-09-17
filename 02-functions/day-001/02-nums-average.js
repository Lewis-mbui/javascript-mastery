// Write a function that takes an array of numbers 
// and returns the average value. Handle the case 
// where the array might be empty.
const arr = [];
console.log(calculateAverage(arr));

function calculateAverage(arr) {
  if (!arr.length) return 0;

  return arr.reduce((a, b) => a + b) / arr.length
}