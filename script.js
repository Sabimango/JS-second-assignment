//Property
const account = {
    accountName: "Sabina Mangal",
    balance: 100,

    getBalance: function () {
        alert(`Your current balance is ${this.balance}.`);
    },
// I use parseFloat here to not lose any decimals which is important for the deposit/withdraw.
    deposit: function () {
        let addBalance = parseFloat(prompt(`Enter the amount you would like to deposit.`));
        if ((Number.isNaN(addBalance)|| (addBalance <= 0))) {
            this.accountError();
            this.deposit();
        }
        else {
            this.balance = addBalance + this.balance;
            alert(`Your updated balance is ${this.balance}.`);
        }
     },

     withdraw: function () {
        let deductBalance = parseFloat(prompt(`How much would you like to withdraw?`));
        if ((Number.isNaN(deductBalance)|| (deductBalance <= 0))) {
            this.accountError();
            this.withdraw();
     }
     else {
        this.balance = this.balance - deductBalance;
        alert(`Your updated balance is ${this.balance}.`);
    }
    },
    getAccountName: function () {
        alert(`Welcome ${this.accountName}! Hope you have a nice day.`);
    },
    accountError: function () {
        alert(`Error. The request could not be processed.`);
    },
    exitAccount: function () {
        alert(`Thank you for using 123ATM! Hope to see you soon!`);
    },
}
// Starter 
function atm() {
    let selection = 0;

    while (selection != 5) {
        selection = parseInt(prompt(`Select a choice: 1.) See balance. 2.) Make a deposit. 3.) Make a withdrawal. 4.) Check the user. 5.) Exit`));

        if (selection === 1) {
            account.getBalance()
        }

        else if (selection === 2) {
            account.deposit()
        }

        else if (selection === 3) {
            account.withdraw()
        }

        else if (selection === 4) {
            account.getAccountName()
        }

        else if (selection === 5) {
            account.exitAccount()
        }

        else {
            alert(`Error. The request could not be processed.`);
        }
    }
}
atm();