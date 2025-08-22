import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games/games';
import { Games } from '../shared/models/Games';
import { NgForOf } from "../../../node_modules/@angular/common/common_module.d";

@Component({
  selector: 'app-home',
  imports: [NgForOf],
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
