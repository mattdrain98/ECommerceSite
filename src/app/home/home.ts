import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games/games';
import { Games } from '../shared/models/Games';
import { ActivatedRoute } from '@angular/router';
import { Search } from "../search/search";
import { Tags } from "../tags/tags";
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import { NotFound } from '../not-found/not-found';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',  
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [Search, Tags, AsyncPipe, CurrencyPipe]
})
export class Home implements OnInit {

  games!: Observable<Games[]>; 
  constructor(private gameService: GamesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.games = this.gameService.getAllGames()
  }

  /*
this.route.params.subscribe(params => {
      if (params['searchTerm'])
      this.games = this.gameService.getAll().filter(game =>
        game.name.toLowerCase().includes(params['searchTerm'].toLowerCase())); //grab search term from url 
      else if (params['tag'])
        this.games = this.gameService.getAllGamesByTag(params['tag']);
      else
      this.games = this.gameService.getAll();
    });
  */ 
}
