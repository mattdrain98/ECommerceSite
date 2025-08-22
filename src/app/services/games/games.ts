import { Injectable } from '@angular/core';
import { Games } from '../../shared/models/Games'; 

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  
  getAll():Games[]{

    return [
      {
        id: 1,
        name: 'Clair Obscur: Expedition 33',
        price: 49.99,
        imageUrl: '/assets/games/images/d92a40d5-ff03-437f-8419-54bc50b51435.webp',
        description: 'Lead the members of Expedition 33 on their quest to destroy the Paintress so that she can never paint death again. Explore a world of wonders inspired by Belle Époque France and battle unique enemies in this turn-based RPG with real-time mechanics.',
        releaseDate: '2024-11-15'
      }
    ];
  }
}