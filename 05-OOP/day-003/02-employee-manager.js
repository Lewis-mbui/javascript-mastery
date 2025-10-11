/*
Create a class hierarchy for Employee and Manager.

Employee should have properties name and salary.

Manager extends Employee and adds a property department.

Both should have a method getDetails() that returns a 
formatted string, but Manager overrides it to include 
the department.
*/

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `Employee Name: ${this.name}
Salary: ${this.salary}
`;
  }
};

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getDetails() {
    return `Employee Name: ${this.name}
Salary: ${this.salary}
Head of: ${this.department}
`;
  }
};

const employee1 = new Employee('John', 5000);
console.log(employee1.getDetails());

const employee2 = new Manager('Lucy', 30000, 'Finance');
console.log(employee2.getDetails());