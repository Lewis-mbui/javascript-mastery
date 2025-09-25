// Create an array of numbers: [3, 7, 12, 9, 15, 21, 8].

// Use a loop to count how many numbers are divisible by 3.

// Print both the count and the numbers themselves.

const arr = [3, 7, 12, 9, 15, 21, 8];

countMultiples(arr);

function countMultiples(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num % 3 === 0) {
      console.log(num);
      count++
    }
  }

  console.log(`Total count: ${count}`);
}