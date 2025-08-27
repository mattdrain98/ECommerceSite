import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound implements OnInit{
  @Input() visible:boolean = false; 
  @Input() notFoundMessage: string = "Nothing found!"; 
  @Input() resetLinkText: string = "Reset"; 
  @Input() resetLinkRoute: string = "/"; 

  constructor(){}

  ngOnInit(): void {
  }

}
