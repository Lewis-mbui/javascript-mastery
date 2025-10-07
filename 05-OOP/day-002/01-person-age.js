// Create a Person class with:

// Private field #age.

// Public properties: name.

// Getter and setter for age (ensure age can’t be negative).
// Practice: Create a person, set their age, and log it.

class Person {
  // Private field
  #age;

  constructor(name, age) {
    this.name = name;
    this.#age = age >= 0 ? age : 0; // ensure no negative age at creation
  }

  // Getter for age
  get age() {
    return this.#age;
  }

  // Setter for age
  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative!");
      return;
    }
    this.#age = value;
  }
}

const person1 = new Person("Lewis", 24);
console.log(person1.name);
console.log(person1.age);

person1.age = 30;
console.log(person1.age);

person1.age = -5;
console.log(person1.age);
