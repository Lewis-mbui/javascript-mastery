/*
Write a function called countAboveThreshold(arr, threshold) that:

Accepts an array of numbers and a threshold value.

Returns how many numbers are above the threshold.
*/

const arr = [45, 62, 71, 30, 89, 55];

const count = countAboveThreshold([45, 62, 71, 30, 89, 55], 60);
console.log(`Numbers above the threshold: ${count}`);

function countAboveThreshold(arr, threshold) {
  let count = 0;
  
  arr.forEach((num) => {
    if (num > threshold) ++count;
  });

  return count;
}