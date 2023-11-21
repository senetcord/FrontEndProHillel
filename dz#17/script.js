class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(value) {
    this.balance += value;
  }

  withdraw(value) {
    this.balance -= value;
  }

  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(1000);
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());
