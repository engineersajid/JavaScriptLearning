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

sajidAccount.deposit(500);
console.log(sajidAccount);
sajidAccount.withdraw(300);
console.log(sajidAccount);
