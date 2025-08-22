import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games/games';
import { Games } from '../shared/models/Games';

@Component({
  selector: 'app-home',  
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  games: Games[] = [];
  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
      this.games = this.gameService.getAll();
  }

}
