export class Sale {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    public getTotal(): number {
        return this.amount;
    }
}