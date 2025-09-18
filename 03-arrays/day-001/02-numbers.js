// You have an array of numbers: [10, 25, 30, 45, 60, 75].

// Remove the first and last elements.

// Add a new number to the middle.

// Print the new array length and the updated array.

const numbers = [10, 25, 30, 45, 60, 75];

numbers.shift();
numbers.pop();
numbers.splice(2, 0, 29); // Add number at index 2
console.log(numbers);