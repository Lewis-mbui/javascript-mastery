// Create a class Rectangle with:

// Properties: width, height.

// Methods:

// getArea() → returns area.

// getPerimeter() → returns perimeter.

// Then create a subclass Square that extends Rectangle.
// Practice: Override one method to better fit Square.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return (this.width * 2) + (this.height * 2);
  }
}

class Circle extends Rectangle {
  constructor (radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return (Math.PI * this.radius * this.radius);
  }

  getPerimeter() {
    return (2 * Math.PI * this.radius);
  }
}

const rec = new Rectangle(3, 4);
console.log(rec.getPerimeter());
console.log(rec.getArea());

const circle = new Circle(4);
console.log(circle.getPerimeter());
console.log(circle.getArea());