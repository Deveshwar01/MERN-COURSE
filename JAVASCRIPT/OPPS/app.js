
/* ALL THE INSTRUCTIONS WERE FOLLOWED IN THIS EXAMPLE
*/

// created a class bank account
class BankAccount {
    constructor(accountNo, accountHolder, balance) {
        this._accountNo = accountNo;
        this._accountHolder = accountHolder;
        this._balance = balance;
    }

    //  properties like "account no,account holder and balance added
    get accountNo() {
        return this._accountNo;
    }

    get accountHolder() {
        return this._accountHolder;
    }

    get balance() {
        return this._balance;
    }

    //  deposit Function
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposit of ${amount} successful. New balance: ${this._balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }


    // withdraw function
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrawal of ${amount} successful. New balance: ${this._balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }

    // displayBalance. function

    displayBalance() {
        console.log(`Account No.: ${this._accountNo}, Account Holder: ${this._accountHolder}, Balance: ${this._balance}`);
    }
}

// subclass SavingAccount that inherits from  BankAccount
class SavingAccount extends BankAccount {
    constructor(accountNo, accountHolder, balance, interestRate, withdrawalLimit) {
        super(accountNo, accountHolder, balance);
        this._interestRate = interestRate;
        this._withdrawalLimit = withdrawalLimit;
    }

    // method "addInterest " in the "saving account" class
    addInterest() {
        const interestAmount = this._balance * (this._interestRate / 100);
        this.deposit(interestAmount);
        console.log(`Interest added. New balance: ${this._balance}`);
    }

    // polymorphism by overriding the "withdraw" method
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            if (amount > this._withdrawalLimit) {
                const penaltyFee = 0.05 * amount; // here i added  5% penalty fee for exceeding the withdrawal limit
                amount += penaltyFee;
                console.log(`Penalty fee of ${penaltyFee} applied.`);
            }

            super.withdraw(amount);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }
}

// Example Usage:
const regularAccount = new BankAccount("123456789", "John Doe", 1000);
regularAccount.deposit(10000);
regularAccount.withdraw(200);
regularAccount.displayBalance();

const savingsAccount = new SavingAccount("987654321", "Jane Doe", 2000, 2, 100);
savingsAccount.deposit(20000);
savingsAccount.addInterest();
savingsAccount.withdraw(150);
savingsAccount.withdraw(120);
savingsAccount.displayBalance();
