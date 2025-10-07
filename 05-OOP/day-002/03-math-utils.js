// Create a MathUtils class:

// All methods should be static (e.g., add, subtract, multiply, divide).

// Add a static property PI with the value 3.14159.

// Bonus: Add a method circleArea(radius) that uses PI.
// Practice: Call these methods directly on the class (not instances).

class MathUtils {
  static PI = 3.14159;

  static add(...args) {
    return args.reduce((a, b) => a + b);
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(...args) {
    return args.reduce((prev, curr) => prev * curr);
  }

  static divide(a, b) {
    if (b === 0) {
      console.log("Cannot divide by zero!");
      return null;
    }
    return a / b;
  }

  static circleArea(radius) {
    return MathUtils.multiply(MathUtils.PI, radius, radius);
  }
}

console.log(MathUtils.divide(30, 4));
console.log(MathUtils.circleArea(5));
