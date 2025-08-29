import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../services/games/games';
import { Tag } from '../shared/models/Tag';
import { TagsService } from '../services/tags/tags';
import { Observable } from 'rxjs';
import {AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tags',
  imports: [AsyncPipe], 
  templateUrl: './tags.html',
  styleUrl: './tags.css'
})
export class Tags implements OnInit {

  @Input()
  gamePageTags?:string[]; 

  @Input()
  justifyContent:string = 'center'; 

  constructor(private tagService:TagsService) { }

  tags$!:Observable<Tag[]>

  ngOnInit(): void {
    this.tags$ = this.tagService.getAllTags(); 
  }

}
