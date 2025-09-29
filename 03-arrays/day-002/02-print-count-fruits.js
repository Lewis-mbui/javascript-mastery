// Use a for...of loop to print each fruit in uppercase.

// Then, count how many fruits have more than 5 letters in their name.

let count = 0;

const fruits = ["apple", "banana", "cherry", "date"];

for (let fruit of fruits) { 
  console.log(fruit);
  if (fruit.length > 5) count++;
}  

console.log(`Fruits with more than 5 letters: ${count}`);