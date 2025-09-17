/*
Write a program that prints all numbers from 1 to 50, but:

If divisible by 3, print "Fizz" instead.

If divisible by 5, print "Buzz" instead.

If divisible by both 3 and 5, print "FizzBuzz"
*/

printFizzBuzz();

function printFizzBuzz() {
  const limit = 50;

  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0)  console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}