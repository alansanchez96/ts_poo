import { Cocktail } from "./Classes/ClassInterface/Cocktail";
import { Wine } from './Classes/ClassInterface/Wine';
import { IAlcoholDrink } from "./Interfaces/IAlcoholDrink";

let cocktail = new Cocktail('margarita', 5, ['tequila', 'limon', 'sal', 'soda', 'hielo']);
let rioja = new Wine('Vino rioja', 14);
let malbec = new Wine('Vino Malbec', 16);

const alcoholicDrinksArray : IAlcoholDrink[] = [cocktail, rioja, malbec];

function showDrinks(drinks: IAlcoholDrink[]) {
    drinks.forEach(drink => console.log(drink.showInfo()));
}

showDrinks(alcoholicDrinksArray); // Output: 
// La bebida se llama margarita y tiene 5% en alcohol. Está compuesto por  tequila, limon, sal, soda, hielo,
// La bebida se llama Vino rioja y tiene 14% en alcohol
// La bebida se llama Vino Malbec y tiene 16% en alcohol