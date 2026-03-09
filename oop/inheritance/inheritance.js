// inheritance from the constructor function.

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();
}

// object create for testing
sajidAccount = new BankAccount("sajid", 500);

//  prototype use wchich safe the memory
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

// sajidAccount.deposit(500);
// console.log(sajidAccount);
// sajidAccount.withdraw(300);
// console.log(sajidAccount);

// CurrentAccount Create with a extra feature called transactionLimit
// and others properties will be inherited from the BankAccount
function CurrentAccount(customerName, balance = 0) {
  BankAccount.call(this, customerName, balance);
  this.transactionLimit = 50000;
}

// BankAccount Prototype used for getting properties into CurrentAccount
CurrentAccount.prototype = Object.create(BankAccount.prototype);

//  prototype use wchich safe the memory
CurrentAccount.prototype.takeBusinessLoan = function (amount) {
  console.log("Taking business loan: " + amount);
};

// SavingsAccount Create for another example.
function SavingsAccount(customerName, balance = 0) {
  BankAccount.call(this, customerName, balance);
  this.transactionLimit = 10000;
}

// BankAccount Prototype used for getting properties into SavingsAccount
SavingsAccount.prototype = Object.create(BankAccount.prototype);

SavingsAccount.prototype.takePersonalLoan = function (amount) {
  console.log("Taking personal loan: " + amount);
};

// Call test the all features
const sajedurAccount = new CurrentAccount("sajid", 490);
sajedurAccount.takeBusinessLoan(10000);
console.log(sajedurAccount);

const taniyaAccount = new SavingsAccount("Taniya Akter", 1000);
taniyaAccount.deposit(500);
taniyaAccount.withdraw(200);
taniyaAccount.takePersonalLoan(200);
console.log(taniyaAccount);
