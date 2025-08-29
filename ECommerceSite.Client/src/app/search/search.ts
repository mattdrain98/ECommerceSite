import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GamesService } from '../services/games/games';
import { Observable } from 'rxjs';
import { Games } from '../shared/models/Games';
import { Tag } from '../shared/models/Tag';
import { TagsService } from '../services/tags/tags';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search implements OnInit {

  selectedTagName: string = '';
  searchTerm: string = '';
  games!: Observable<Games[]>; 
  tags$!: Observable<Tag[]>;
  selectedWidth: number = 50; // default width

  @Output() tagSelected = new EventEmitter<string>(); 
  @Output() filterChanged = new EventEmitter<{ searchTerm: string; tagName: string }>();
  @ViewChild('textSizer') textSizer!: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router, private gameService: GamesService, private tagService: TagsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.searchTerm = params['searchTerm']
      })
    this.tags$ = this.tagService.getAllTags();
  }
  
  onTagChange(): void {
    this.tagSelected.emit(this.selectedTagName); 
  }
  
  search(): void {
      this.emitFilter();
  }

    private emitFilter(): void {
    this.filterChanged.emit({
      searchTerm: this.searchTerm.trim(),
      tagName: this.selectedTagName
    });
  }
  
  updateWidth(): void {
    const text = this.textSizer.nativeElement as HTMLElement;
    this.selectedWidth = text.offsetWidth + 40; // +40px for padding/arrow
  }
}
