function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();

  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = function (amount) {
    this.balance -= amount;
  };
}

// new keyword need to use
sajidAccount = new BankAccount("sajid");
sajidAccount.deposit(3000);
console.log(sajidAccount);
sajidAccount.withdraw(2000);
console.log(sajidAccount);
