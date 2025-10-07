//This code demonstrates the use of parameterized constructor, private and public data members in a class.

class BankAccount {
  #balance = 0; // private data member
  #transactionHistory = []; // private data member
  name = ''; // public data member

  //parameterized constructor
  constructor(initialBalance, name) {
    this.#balance = initialBalance;
    this.name = name;
  }
  /*
  //default constructor
    constructor() {
    console.log("Constructor is called");
  }
*/
  getBalance() {
    return this.#balance;
  }
}

//create an object for BankAccount class.
const account = new BankAccount(5000, 'Chary');
account.name = 'Chary Chelloji';

//Private fields cannot be accessed outside the class.
//account.#balance = 10000;

//accessing public methods
console.log(account.getBalance());
