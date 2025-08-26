import { Component, OnInit} from '@angular/core';
import { Games } from '../shared/models/Games';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../services/games/games';
import { CartService } from '../services/cart/cart';
import { catchError, Observable } from 'rxjs';

@Component({
  selector: 'app-game-page',
  imports: [],
  templateUrl: './game-page.html',
  styleUrl: './game-page.css'
})
export class GamePage implements OnInit {

  games$!: Observable<Games[]>;
  errorMessage?: string;
   
  constructor(private activatedRoute: ActivatedRoute,
        private gameService: GamesService,
        private cartService: CartService,
        private router: Router) { 

  }

  ngOnInit(): void {
    this.games$ = this.gameService.getAllGames(); 

    var test = 0; 
  }


}

/*
    this.activatedRoute.params.subscribe(params => {
      if (params['id'])
        this.game = gameService.getGameById(params['id']);  
    });

  addToCart() {
    this.cartService.addToCart(this.game);
    this.router.navigateByUrl('/cart-page');
  }
*/ 