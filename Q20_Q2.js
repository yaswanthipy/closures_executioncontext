function createBankAccount() {
  let balance = 0;  

  return {
    deposit: function (amount) {
      balance += amount;
      console.log("Deposited:", amount);
    },

    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log("Withdrawn:", amount);
      }
    },

    checkBalance: function () {
      console.log("Current balance:", balance);
    }
  };
}


const account = createBankAccount();
account.deposit(500);     // Deposited: 500
account.withdraw(200);    // Withdrawn: 200
account.withdraw(400);    // Insufficient balance
console.log(account.balance); // undefined (cannot access)
