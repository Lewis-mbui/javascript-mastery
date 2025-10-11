/*
Create a small School System simulation:

Base class Person with name and age.

Subclasses Student and Teacher.

Student adds grade.

Teacher adds subject.

Both have a method introduce() that logs a custom message.

Create an array of mixed Student and Teacher objects, 
and loop through calling introduce() on each.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log('I am a person. We are all people');
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    console.log(`My name is Teacher ${this.name}. I am ${this.age} years old and I teach ${this.subject}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  introduce() {
    console.log(`My name is ${this.name}. I am ${this.age} years old. I got a grade of ${this.grade}`);
  }
}

const people = [
  new Teacher('Samson', 31, 'Maths'),
  new Student('Joe', 11, 'B'),
  new Student('Karen', 11, 'A-'),
  new Teacher('Nelius', 27, 'Social Studies'),
  new Student('Edwin', 11, 'A')
];

for (person of people) {
  person.introduce();
}