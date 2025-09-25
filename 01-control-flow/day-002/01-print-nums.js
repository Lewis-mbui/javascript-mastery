// Write a program that prints the numbers from 1 to 20 using:

// - a for loop,
// - a while loop,
// - a do…while loop.

printNums();

function printNums() {
  console.log("Using for Loop:");
  for (let i = 1; i <= 20; i++)
    console.log(i);

  let i = 1;

  console.log("Using while loop");
  while (i <= 20){
    console.log(i);
    i++;
  }

  let j = 1;

  console.log("Using do...while:")
  do {
    console.log(j)
    j++;
  } while (j <= 20);
}