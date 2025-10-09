/*
Imagine you’re managing a list of daily temperatures:

const temps = [23, 25, 21, 29, 31, 27, 19, 33, 26];


Write a program that finds the highest and lowest temperature in the list.

Focus: combining loops, comparisons, and tracking min/max values.
*/

const temps = [23, 25, 21, 29, 31, 27, 19, 33, 26];

let maxTemp = temps[0];
let minTemp = temps[0];

temps.forEach((temp) => {
  if (temp < minTemp) minTemp = temp;
  if (temp > maxTemp) maxTemp = temp;
});

console.log(`Max temp: ${maxTemp}, Min temp: ${minTemp}`);