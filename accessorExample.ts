class Account {
    private amount: number;
    private comission: number;

    constructor(amount: number, comission: number) {
        this.amount = amount;
        this.comission = comission;
    }

    set setAmount(amount: number) {
        if (amount < 0) amount = 0;

        this.amount = amount;
    }

    get total() {
        return this.amount + this.comission;
    }
}

const account = new Account(20, 5);
account.setAmount = -10;
console.log(account.total); // Output: 5

const account_2 = new Account(20, 5);
account.setAmount = 91;
console.log(account.total); // Output: 96