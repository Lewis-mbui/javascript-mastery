// You’re tracking students in a classroom.

// Create an object student with name, age, 
// and grades (an array of numbers).

// Add a method calculateAverage that returns 
// the student’s average grade.

// Add another student and compare whose average is higher.

function Student(name, age, grades) {
  this.name = name;
  this.age = age;
  this.grades = grades;
}

Student.prototype.getAverage = function() {
  return parseFloat((this.grades.reduce((a, b) => a + b) 
    / this.grades.length).toFixed(2));
}

const student1 = new Student('John', 15, [80, 46, 70]);
const student2 = new Student('Lilian', 14, [74, 88, 76]);

console.log(student1);
console.log(student2);
console.log(compareGrade(student1, student2));

function compareGrade(student1, student2) {
  return (student1.getAverage() > student2.getAverage())
  ? `${student1.name} has a higher grade`
  : `${student2.name} has a higher grade`;
}

