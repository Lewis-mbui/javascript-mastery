// Create a BankAccount class with:

// Private field #balance.

// Methods: deposit(amount), withdraw(amount), getBalance().

// Ensure you can’t withdraw more than available balance.(And
// other relevant error handling)
// Practice: Simulate some deposits and withdrawals.

class BankAccount {
  // Private field
  #balance;

  constructor(initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.#balance = initialBalance;
  }

  // Deposit money
  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Deposit amount must be a positive number");
      return;
    }
    this.#balance += amount;
    console.log(`Deposited: $${amount}`);
  }

  // Withdraw money
  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Withdrawal amount must be a positive number");
      return;
    }
    if (amount > this.#balance) {
      console.log("Insufficient funds!");
      return;
    }
    this.#balance -= amount;
    console.log(`Withdrew: $${amount}`);
  }

  // Get current balance
  getBalance() {
    return this.#balance;
  }
}


const b = new BankAccount(10000);