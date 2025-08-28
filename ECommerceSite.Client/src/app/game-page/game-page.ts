import { Component, OnInit} from '@angular/core';
import { Games } from '../shared/models/Games';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../services/games/games';
import { CartService } from '../services/cart/cart';
import { catchError, Observable } from 'rxjs';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-game-page',
  imports: [CurrencyPipe, AsyncPipe],
  templateUrl: './game-page.html',
  styleUrl: './game-page.css'
})
export class GamePage implements OnInit {

  game!: Observable<Games>; 
  errorMessage?: string;
   
  constructor(private activatedRoute: ActivatedRoute,
        private gameService: GamesService,
        private cartService: CartService,
        private router: Router) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['gameId'])
        this.game = this.gameService.getGameById(params['gameId']); 
    }); 
  }
}

/*

  addToCart() {
    this.cartService.addToCart(this.game);
    this.router.navigateByUrl('/cart-page');
  }
*/ 