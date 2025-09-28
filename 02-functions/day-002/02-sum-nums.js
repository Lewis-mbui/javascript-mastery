// Write a function that takes any number 
// of numeric arguments and returns their sum.

console.log(sumNumbers(2, 4, 6));

function sumNumbers(...nums) {
  if (nums.length === 0) return 0;

  return nums.reduce((prev, num) => prev + num);
}