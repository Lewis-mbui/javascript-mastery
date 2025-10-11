/*
Create a base class Animal with:

Property: name

Method: makeSound() that logs "Some generic sound".

Then create subclasses Dog and Cat that extend Animal 
and override makeSound() to log "Bark!" and "Meow!" respectively.
*/

class Animal {
  makeSound() {
    console.log('Some generic sound');
  }
};

class Cat extends Animal {
  makeSound() {
    console.log('Meow!');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Bark!');
  }
};

const cat1 = new Cat();
cat1.makeSound();

const dog1 = new Dog();
dog1.makeSound();