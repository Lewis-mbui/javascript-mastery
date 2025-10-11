/*
Create a base class Shape with a method calculateArea().
Then create subclasses:

Circle (with radius)

Rectangle (with width and height)
Each should override calculateArea() with the correct formula.
*/

class Shape {
  calculateArea() {
    return 'some area';
  }
};

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
};

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
};

const r = new Rectangle(3, 6);
console.log(r.calculateArea());

const c = new Circle(5);
console.log(c.calculateArea());