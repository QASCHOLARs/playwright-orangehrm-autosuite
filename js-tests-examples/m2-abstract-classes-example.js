/* 
1. Abstract classes are used to define a template for other classes. They cannot be instantiated directly and are meant to be subclassed. The subclasses will provide the implementation for the abstract methods.
2. JavaScript does not have built-in support for abstract classes, but we can simulate them using ES6 classes and the `new.target` property.
*/

// Abstract base class for Test Cases
class TestCase {
  name;
  constructor(name) {
    if (new.target.name === TestCase) {
      console.log('which class is being instantiated:', new.target.name);
      throw new Error('Cannot instantiate abstract class TestCase directly');
    }
    this.name = name;
  }

  // Abstract method (must be overridden)
  runTest() {
    throw new Error('runTest() must be implemented in subclass');
  }

  // Common behavior for all test cases
  setup() {
    console.log(`[${this.name}] Test setup completed.`);
  }

  teardown() {
    console.log(`[${this.name}] Test teardown completed.`);
  }

  // Template method (skeleton of test execution)
  execute() {
    this.setup();
    this.runTest(); // Must be provided by child class
    this.teardown();
  }
}

// Child test case: Login Test
class LoginTest extends TestCase {
  constructor(username) {
    super('LoginTest');
    this.username = username;
  }

  runTest() {
    console.log(`Running login test for user: ${this.username}`);
    // test logic here (simulate login)
  }
}

// Child test case: Payment Test
class PaymentTest extends TestCase {
  constructor(amount) {
    super('PaymentTest');
    this.amount = amount;
  }

  runTest() {
    console.log(`Running payment test for amount: ${this.amount}`);
    // test logic here (simulate payment)
  }
}

// ✅ Usage
const t1 = new LoginTest('charyUser');
t1.execute();

const t2 = new PaymentTest(500);
t2.execute();

// ❌ Uncommenting this will throw an error
// const baseTest = new TestCase("BaseTest");
