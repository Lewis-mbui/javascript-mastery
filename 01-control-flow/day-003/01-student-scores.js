/*
You have an array of student scores:

const scores = [78, 92, 45, 88, 56, 99, 61];


Write a program that loops through the array and:

Prints "Pass" for scores ≥ 60

Prints "Fail" for scores < 60

Focus: looping + conditional logic on arrays.
*/

const scores = [78, 92, 45, 88, 56, 99, 61];

for (let score of scores)
(score < 60) ? console.log('Fail') : console.log('Pass');