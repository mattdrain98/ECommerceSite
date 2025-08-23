import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games/games';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  imports: [],
  templateUrl: './tags.html',
  styleUrl: './tags.css'
})
export class Tags implements OnInit {

  constructor(private gameService:GamesService) { }

  tags:Tag[] = [] 

  ngOnInit(): void {
    this.tags = this.gameService.getAllTags(); 
  }

}
