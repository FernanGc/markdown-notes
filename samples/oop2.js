class Checking {

    constructor(amount) {
        this.balance = amount;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds");
        }
    }

    showInfo() {
        return "Balance: " + this.balance;
    }

} // End class

var account = new Checking(500);
account.deposit(1000);
console.log(account.showInfo()); // Balance: 1500
account.withdraw(750);
console.log(account.showInfo()); // Balance: 750
account.withdraw(800); // displays "Insufficient funds"
console.log(account.showInfo()); // Balance: 750