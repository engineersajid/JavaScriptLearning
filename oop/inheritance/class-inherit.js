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

// Create CurrentAccount and extends it the BankAccount Features.
class CurrentAccount extends BankAccount {
  transactionLimit = 50000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  takeBusinessLoan(amount) {
    console.log("take loan : " + amount);
  }
}

// Create Savings account and extend the Current Account Features.
class SavingsAccount extends CurrentAccount {
  transactionLimit = 10000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  takePersonalLoan(amount) {
    console.log("take loan : " + amount);
  }
}

// object create with customerName and balance
// sajidAccount = new BankAccount("sajid", 500);
// console.log(sajidAccount);
// without balance

// rahmanAccount = new BankAccount("rahman");
// console.log(rahmanAccount);

// rahmanAccount.deposit(400);
// console.log(rahmanAccount);

// sajidAccount.withdraw(400);
// console.log(sajidAccount);

sajedurAccount = new CurrentAccount("Sajedur", 5000);
console.log(sajedurAccount);
sajedurAccount.takeBusinessLoan(10000);
console.log(sajedurAccount);

sajidAcc = new SavingsAccount("Sajedur Rahman Sajid", 30000);
sajidAcc.deposit(4000);
sajidAcc.takeBusinessLoan(4000);

console.log(sajidAcc);
