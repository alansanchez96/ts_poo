import { IAlcoholDrink } from "../../Interfaces/IAlcoholDrink";

export class Wine implements IAlcoholDrink {
    name: string;
    alcohol: number;

    constructor(name: string, alcohol: number) {
        this.name = name;
        this.alcohol = alcohol;
    }

    showInfo(): string {
        return `La bebida se llama ${this.name} y tiene ${this.alcohol}% en alcohol`;
    }
}