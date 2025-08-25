import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { WeatherService } from './services/weather/weather';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ECommerceSite');
  weatherForecasts: any[] = []; 
  weatherForecastService = inject(WeatherService); 

  constructor(){
    this.weatherForecastService.get().subscribe(weatherForecasts => {
      this.weatherForecasts = weatherForecasts; 
    }); 
  }
}
