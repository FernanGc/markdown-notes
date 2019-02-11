class CreditCard {
    constructor(customer, bank, account, limit, balance = 0.0) {
        this.customer = customer;       // name of the customer (e.g., ”John Bowman”)
        this. bank = bank;              // name of the bank (e.g., ”California Savings”)
        this. account = account;        // account identifier (e.g., ”5391 0375 9387 5309”)
        this. limit = limit;            // credit limit (measured in dollars)
        this.balance = balance          // current balance (measured in dollars)
    }

    getBalance() {
        return this.balance;
    }

    charge(price) {
        if(price + this.balance > this.limit)
            return false;
        this.balance += price;
        return true;
    }

    makePayment(amount) {
        this.balance -= amount;
    }

    printInfo() {
        console.log(`Customer: ${this.customer}`);
        console.log(`Bank: ${this.bank}`);
        console.log(`Account: ${this.account}`);
        console.log(`Balance: ${this.balance}`);
        console.log(`Limit: ${this.limit}`);
    }
}

// Output - Test
const wallet = [3];

wallet[0] = new CreditCard("John Bowman", "California Savings",
    "5391 0375 9387 5309", 5000);
wallet[1] = new CreditCard("John Bowman", "California Federal",
    "3485 0399 3395 1954", 3500);
wallet[2] = new CreditCard("John Bowman", "California Finance",
    "5391 0375 9387 5309", 2500, 300);

for (let val = 1; val <= 16; val++) {
    wallet[0].charge(3 * val);
    wallet[1].charge(2 * val);
    wallet[2].charge(val);
}

for (let index = 0; index < wallet.length; index++) {
    wallet[index].printInfo();
    while (wallet[index].getBalance() > 200.0) {
        wallet[index].makePayment(200);
        console.log("New balance = " + wallet[index].getBalance());
    }
}



