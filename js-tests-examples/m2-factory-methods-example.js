//Note
//This is a factory method example
//https://refactoring.guru/design-patterns/factory-method
//https://www.dofactory.com/javascript/design-patterns/factory-method

class Developer {
  constructor(name) {
    this.name = name;
  }
  work() {
    console.log(`${this.name} is writing code.`);
  }
}

class Manager {
  constructor(name) {
    this.name = name;
  }
  work() {
    console.log(`${this.name} is managing the team.`);
  }
}
class Tester {
  constructor(name) {
    this.name = name;
  }
  work() {
    console.log(`${this.name} is testing the application.`);
  }
}

class EmployeeFactory {
  createEmployee(name, type) {
    switch (type) {
      case 'developer':
        return new Developer(name);
      case 'manager':
        return new Manager(name);
      case 'tester':
        return new Tester(name);
    }
  }
}
//usage
const employeeFactory = new EmployeeFactory();
const developer = employeeFactory.createEmployee('John', 'developer');
const manager = employeeFactory.createEmployee('Jane', 'manager');
const tester = employeeFactory.createEmployee('Jack', 'tester');

developer.work();
manager.work();
tester.work();

console.log(developer instanceof Developer);
console.log(manager instanceof Manager);
console.log(tester instanceof Tester);
console.log(developer);
console.log(manager);
console.log(tester);
