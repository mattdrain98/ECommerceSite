import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Tags } from '../../tags/tags';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
    private http = inject(HttpClient); 
    private apiUrl = environment.apiURL + '/api/tag'; 
    
  public getAllTags(): Observable<Tags[]>{
    return this.http.get<Tags[]>(this.apiUrl); 
  }
} 
