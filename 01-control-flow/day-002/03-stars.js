// Write a program that asks the user for a number n and 
// prints a right-angled triangle of * with n rows

const n = 5;
printStars(n);

function printStars(n) {
  const rows = n;

  for (let row = 1; row <= rows; row++) {
    let str = '';

    for (let i = 0; i < row; i++) str += '*';

    console.log(str);
  }
}