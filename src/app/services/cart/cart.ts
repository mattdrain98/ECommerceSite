import { Injectable } from '@angular/core';
import { Games } from '../../shared/models/Games';
import {Cart} from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart(); 
  constructor() { }

  addToCart(game: Games): void {
    let cartItem = this.cart.items.find(item => item.game.id === game.id); 
    if (cartItem) {
      this.changeQuantity(game.id, cartItem.quantity + 1);
      return; 
    } else {
      this.cart.items.push(new CartItem(game)); 
    }
  }

  removeFromCart(gameId: number): void {
    this.cart.items = 
    this.cart.items.filter(item => item.game.id != gameId); 
  }

  changeQuantity(gameId:number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.game.id === gameId); 
    if(!cartItem) return; 
    cartItem.quantity = quantity; 
  }

  getCart():Cart{
    return this.cart; 
  }
}

export { Cart };
