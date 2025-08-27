import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search implements OnInit {

  searchTerm: string = '';
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.searchTerm = params['searchTerm']
      })
  }

  search(): void {
    if (this.searchTerm.trim()) 
      this.router.navigateByUrl(`/search/${this.searchTerm}`);
  }
}
