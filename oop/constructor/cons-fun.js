function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();
}

// new keyword need to use
sajidAccount = new BankAccount("sajid");
console.log(sajidAccount);
