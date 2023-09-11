import { BeerType } from "./types/BeerType";
import { SnackType } from "./types/SnackType";
import { Brahma } from './beers/Brahma'

function mostrarCerveza(beer: BeerType): void {
    console.log(`info: ${beer.brand}, nivel de alcohol: ${beer.alcohol} `)
}

mostrarCerveza(Brahma); // INPUT - info: Brahma, nivel de alcohol: 6 

const combo: BeerType & SnackType = {
    name: 'Lays',
    price: 650,
    alcohol: 8,
    brand: 'IPA'
}

console.log(combo)