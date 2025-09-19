/*
// Number of occurences of a string in an array rep by an object

const colors = ["red", "red", "blue", "green","blue","red"];

const result = colors.reduce((prev, color) => {
  prev[color] = (prev[color] || 0) + 1;
  return prev;
}, {});

console.log(result);
*/

// Find the person with the highest salary

// const employees = [
//   { name: 'Lewis', salary: 50000 },
//   { name: 'Jane', salary: 90000 },
//   { name: 'Yusuf', salary: 28000 },
//   { name: 'Mary', salary: 50000 },
//   { name: 'Sophia', salary: 115000 },
// ];

// // Use the first employee as the initial "highest"
// const result = employees.reduce((highest, employee) => {
//   return (employee.salary > highest.salary) ? employee : highest;
// });

// console.log(result);
// { name: 'Sophia', salary: 115000 }