class BankAccount {
  customerName;
  balance;
  accountNumber;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

// object create with customerName and balance
sajidAccount = new BankAccount("sajid", 500);
console.log(sajidAccount);
// without balance

rahmanAccount = new BankAccount("rahman");
console.log(rahmanAccount);

rahmanAccount.deposit(400);
console.log(rahmanAccount);

sajidAccount.withdraw(400);
console.log(sajidAccount);
