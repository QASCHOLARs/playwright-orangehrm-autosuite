//This code demonstrates data encapsulation in JavaScript using classes and private fields.
//It shows how to use private fields and methods to hide implementation details and expose only the necessary interface.
//This is a simple example of a class with private fields and methods.
class BankAccount {
  #balance = 0; // private data member
  #transactionHistory = []; // private data member
  name = ''; // public data member

  constructor(initialBalance, name) {
    this.#balance = initialBalance;
    this.name = name;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#transactionHistory.push({ type: 'deposit', amount });
    }
    this.#getSystemMessage();
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      this.#transactionHistory.push({ type: 'withdraw', amount });
    }
  }

  getBalance() {
    return this.#balance;
  }

  getTransactionHistory() {
    return this.#transactionHistory;
  }
  #getSystemMessage() {
    console.log('Operation is finished');
  }
}

//create an object for BankAccount class.
const account = new BankAccount(1000, 'John Doe');

//accessing public methods
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
console.log(account.getTransactionHistory());

//exporting the class to use in other files.
export { BankAccount };
