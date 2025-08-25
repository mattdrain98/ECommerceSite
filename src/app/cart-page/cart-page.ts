import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { CurrencyPipe } from '@angular/common';
import { GamesService } from '../services/games/games';
import { NotFound } from "../not-found/not-found";

@Component({
  selector: 'app-cart-page',
  imports: [NotFound, CurrencyPipe],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage {
  cart!:Cart; 
  constructor(private cartService: CartService, private gameService: GamesService) {
    let games = gameService.getAll(); 
    this.setCart(); 
   }

  ngOnInit(): void {
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.game.id); 
    this.setCart(); 
  }

  changeQuantity(cartItem:CartItem, quantityInString: string){
    const quantity = parseInt(quantityInString); 
    this.cartService.changeQuantity(cartItem.game.id, quantity); 
  }

  setCart(){
    this.cart = this.cartService.getCart(); 
  }


}
