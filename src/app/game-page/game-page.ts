import { Component, OnInit} from '@angular/core';
import { Games } from '../shared/models/Games';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../services/games/games';

@Component({
  selector: 'app-game-page',
  imports: [],
  templateUrl: './game-page.html',
  styleUrl: './game-page.css'
})
export class GamePage implements OnInit {

  game!: Games;
  constructor(private activatedRoute: ActivatedRoute,
        private gameService: GamesService) { 
    this.activatedRoute.params.subscribe(params => {
      if (params['id'])
        this.game = gameService.getGameById(params['id']);  
    });
  }

  ngOnInit(): void {

  }

}
