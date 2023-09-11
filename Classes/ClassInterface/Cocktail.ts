import { IAlcoholDrink } from "../../Interfaces/IAlcoholDrink";
import { IMixedDrink } from "../../Interfaces/IMixedDrink";

export class Cocktail implements IAlcoholDrink, IMixedDrink {
    name: string;
    alcohol: number;
    ingredients: string[];

    constructor(name: string, alcohol: number, ingredients: string[]) {
        this.name = name;
        this.alcohol = alcohol;
        this.ingredients = ingredients;
    }

    showInfo(): string {
        const ingredientsInfo = this.ingredients.reduce((increment, ingredient) => increment + ' ' + ingredient + ',', '');

        return `La bebida se llama ${this.name} y tiene ${this.alcohol}% en alcohol. Está compuesto por ${ingredientsInfo}`;
    }
}