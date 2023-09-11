import { Sale } from './Classes/Sale';
import { SaleWithTax } from './Classes/SaleWithTax';

let sale: Sale = new Sale(5);

let saleWithTax: SaleWithTax = new SaleWithTax(10, sale.getTotal());

const response = saleWithTax.getTotal();

console.log(response);