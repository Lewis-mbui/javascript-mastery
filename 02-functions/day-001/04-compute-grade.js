/*
Write a function that takes an object 
representing a student 
(with properties like name, age, and grades as an array) 
and returns an object summary including:

The student’s name

Their average grade

Whether they passed (average ≥ 50) or failed
*/
const student = {
  name: 'Lewis',
  age: 23,
  grades: [34, 78, 49, 82]
};

console.log(computeGrade(student));

function computeGrade(obj) {
  const avg = obj.grades.reduce((a, b) => a + b) / obj.grades.length;
  const status = (avg >= 50) ? "Pass" : "Fail";
  return `
  Name: ${obj.name}
  Average grade: ${avg}
  Status: ${status}
  `;
}