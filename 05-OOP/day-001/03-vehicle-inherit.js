// Create a class hierarchy for Vehicle.

// Vehicle has properties like brand, 
// year and a method start().

// Car extends Vehicle and adds a property doors.

// Motorcycle extends Vehicle and adds a property hasSidecar.

// Both override the start() method with specific messages.
// Practice: Demonstrate polymorphism by 
// storing a Car and Motorcycle in an array 
// and calling start() on each.

class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  start() {
    console.log('start vehicle');
  }
}

class Car extends Vehicle {
  constructor(brand, year, doors) {
    super(brand, year);
    this.doors = doors;
  }

  start() {
    console.log('start car');
  }
}

class MotorCycle extends Vehicle {
  constructor(brand, year, hasSideCar) {
    super(brand, year);
    this.hasSideCar = hasSideCar;
  }

  start() {
    console.log('start motorbike');
  }
}

const c = new Car('BMW X3', '2010', 4);
const m = new MotorCycle('Shinery', '2009', false);

const vehicles = [c, m];

for (let vehicle of vehicles)
  vehicle.start();
