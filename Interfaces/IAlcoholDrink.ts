import { IDrink } from "./IDrink";

export interface IAlcoholDrink extends IDrink {
    alcohol: number;

    showInfo(): string;
}