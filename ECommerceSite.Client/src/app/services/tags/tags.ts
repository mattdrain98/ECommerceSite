import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Tags } from '../../tags/tags';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
    private http = inject(HttpClient); 
    private apiUrl = environment.apiURL + '/api/tag'; 
    
  public getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(this.apiUrl); 
  }

  public getTagByName(tagName: string): Observable<Tag>{
      return this.http.get<Tag>(this.apiUrl + '/tagName/' + tagName); 
  }
} 
