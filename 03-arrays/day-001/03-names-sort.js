// Write a program that:

// Removes every second element (so Bob, David, Frank get removed).

// Reverses the remaining array.

// Prints the final result.

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

const filtered = names.filter((name, index) => {
  return index % 2 === 0;
});

filtered.reverse();

console.log(filtered);