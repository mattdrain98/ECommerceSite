import { inject, Injectable } from '@angular/core';
import { Games } from '../../shared/models/Games'; 
import { Tag } from '../../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  
  constructor() { }
  private http = inject(HttpClient); 
  private apiUrl = environment.apiURL + '/api/games'; 

  public getAllGames(): Observable<Games[]>{
    return this.http.get<Games[]>(this.apiUrl); 
  }

  public getGameById(id: number): Observable<Games>{
    return this.http.get<Games>(this.apiUrl + `/${id}`); 
  }

  public getGamesBySearch(searchTerm: string): Observable<Games[]>{
    return this.http.get<Games[]>(this.apiUrl + `/search/${searchTerm}`); 
  }

  public getAllGamesByTag(tagName: string): Observable<Games[]> {
    const name = tagName?.trim().toLowerCase();
    if (!name || name === 'all') return this.getAllGames();

    return this.http.get<Games[]>(this.apiUrl + `/tags/${tagName}`); 
  }
}