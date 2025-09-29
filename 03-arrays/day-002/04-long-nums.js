// Loop through the array.

// For each word, if its length is greater than 5, 
// store it in a new array called longWords.

// Print the final longWords array.

const words = ["hello", "world", "javascript", "is", "awesome"];

const longWords = [];

words.forEach(word => {
  if (word.length > 5) longWords.push(word);
});

console.log(longWords);

