import { Games } from "./Games";
import { CurrencyPipe } from "@angular/common";

export class CartItem{
    constructor(game:Games){
        this.game = game;
        this.price; 
    }

    game:Games; 
    quantity:number = 1; 

    get price():number{
        return this.game.gamePrice * this.quantity; 
    }
}