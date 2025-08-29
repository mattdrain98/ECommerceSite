import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games/games';
import { Games } from '../shared/models/Games';
import { ActivatedRoute } from '@angular/router';
import { Search } from "../search/search";
import { Tags } from "../tags/tags";
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import { catchError, map, Observable, of, switchMap } from 'rxjs';

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
  this.games = this.route.params.pipe(
    switchMap(params => {
      if (params['searchTerm']) {
        return this.gameService.getAllGames().pipe(
          map(games =>
            games.filter(game =>
              game.gameName.toLowerCase().includes(params['searchTerm'].toLowerCase())
            )
          ),
          catchError(err => {
            console.error('Search failed:', err);
            return of([]); // empty list instead of blank page
          })
        );
      } else if (params['tagName']) {
        return this.gameService.getAllGamesByTag(params['tagName']);
      } else {
        return this.gameService.getAllGames();
      }
    })
  );
  }
  
  onTagSelected(tagName: string) {
    this.games = this.gameService.getAllGamesByTag(tagName).pipe(
      catchError(err => {
        console.error('Failed to load games by tag:', err);
        return of([]);
      })
    );
  }

  
  applyFilter(filter: { searchTerm: string; tagName: string }) {
    if (filter.tagName) {
      this.games = this.gameService.getAllGamesByTag(filter.tagName);
    } else if (filter.searchTerm) {
      this.games = this.gameService.getGamesBySearch(filter.searchTerm);
    } else {
      this.games = this.gameService.getAllGames();
    }
  }
}
