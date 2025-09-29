// Use forEach to loop through an array of "scores" 
// and calculate the average.

// Print the average at the end.

let sum = 0;

const scores = [85, 92, 78, 90, 88, 76, 95];

scores.forEach(score => sum += score);

const average = sum / scores.length;

console.log(average);