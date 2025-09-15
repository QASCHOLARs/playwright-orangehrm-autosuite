// Import the BankAccount class from the module
const { BankAccount } = require('./m2-oops-data-encapsulations-example.js');

//create an object for BankAccount class.
const account = new BankAccount(1000, 'John Doe');

//accessing public methods
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
console.log(account.getTransactionHistory());
