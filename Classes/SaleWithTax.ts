import { Sale } from "./Sale";

export class SaleWithTax extends Sale {
    private tax: number;

    constructor(tax: number, amount: number) {
        super(amount);
        this.tax = tax;
    }

    override getTotal(): number {
        return this.tax + super.getTotal();
    }
}