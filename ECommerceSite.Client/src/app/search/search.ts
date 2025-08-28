import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GamesService } from '../services/games/games';
import { Observable } from 'rxjs';
import { Games } from '../shared/models/Games';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search implements OnInit {

  searchTerm: string = '';
  games!: Observable<Games[]>; 
  constructor(private route: ActivatedRoute, private router: Router, private gameService: GamesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.searchTerm = params['searchTerm']
      })
  }

  search(): void {
    if (this.searchTerm.trim()) 
    {
      this.router.navigateByUrl(`/search/${this.searchTerm}`);
      this.games = this.gameService.getGamesBySearch(this.searchTerm.trim()); 
    }
  }
}
