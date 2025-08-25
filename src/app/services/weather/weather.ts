import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(){}
    private http = inject(HttpClient); 
    private apiUrl = environment.apiURL + '/weatherforecast'; 

    public get(): Observable<any>{
      return this.http.get(this.apiUrl); 
    }
}