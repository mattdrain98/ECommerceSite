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
        releaseDate: '2025-04-24'
      },
      {
        id: 2,
        name: 'Metal Gear Solid Δ: Snake Eater',
        price: 69.99,
        imageUrl: '/assets/games/images/c1fa436c-02ec-4b51-b2e9-d31471ab6754.webp',
        description: 'A remake of the 2004 game METAL GEAR SOLID 3: SNAKE EATER, with the same gripping story and engrossing world, now with all new graphics and 3D audio that enhance the jungle atmosphere. Get ready for the ultimate survival stealth action experience.',
        releaseDate: '2025-08-28'
      },
        {
        id: 3,
        name: 'Ghost of Yotei',
        price: 69.99,
        imageUrl: '/assets/games/images/59be9e4b-f5d1-42a9-82bc-6c40fc855d7a.webp',
        description: 'Discover a bold, new story of a warrior in Japan who is on a mission of vengeance all her own. Set 300 years after the critically acclaimed Ghost of Tsushima, Ghost of Yōtei is a standalone experience set in 1600s rural Japan. The story follows a haunted, lone mercenary named Atsu. Thirsty for revenge, she travels through the beautiful, rugged landscapes of northern Japan, hunting those who killed her family many years earlier. Sixteen years after her family`s death, Atsu`s quest across Ezo brings her to unexplored lands in search of a gang of six outlaws, but she finds much more than vengeance. Throughout her journey, Atsu will discover unlikely allies, and greater bonds than she could have imagined.',
        releaseDate: '2025-10-02'
      },
      {
        id: 4,
        name: 'Gears of War: Reloaded',
        price: 39.99,
        imageUrl: '/assets/games/images/85ffb1f5-21d2-42c1-9eb7-b847cbbbc338.webp',
        description: 'Experience the origins of one of gaming`s most acclaimed franchises like never before, faithfully remastered and optimized for PC.',
        releaseDate: '2025-08-26'
      },
      {
        id: 5,
        name: 'Mafia: The Old Country',
        price: 49.99,
        imageUrl: '/assets/games/images/78d2ba2e-d423-43f0-a9a5-b0d8f5d5556b.webp',
        description: 'Discover a bold, new story of a warrior in Japan who is on a mission of vengeance all her own. Set 300 years after the critically acclaimed Ghost of Tsushima, Ghost of Yōtei is a standalone experience set in 1600s rural Japan. The story follows a haunted, lone mercenary named Atsu. Thirsty for revenge, she travels through the beautiful, rugged landscapes of northern Japan, hunting those who killed her family many years earlier. Sixteen years after her family`s death, Atsu`s quest across Ezo brings her to unexplored lands in search of a gang of six outlaws, but she finds much more than vengeance. Throughout her journey, Atsu will discover unlikely allies, and greater bonds than she could have imagined.',
        releaseDate: '2025-10-02'
      },
      {
        id: 6,
        name: 'Call of Duty: Black Ops 7',
        price: 69.99,
        imageUrl: '/assets/games/images/c2b8e04e-9599-467f-bd4f-43b7ee6849cb.webp',
        description: 'In Call of Duty®: Black Ops 7, Treyarch and Raven Software are bringing players the most mind-bending Black Ops ever across an innovative Co-Op Campaign, an electrifying Multiplayer experience, and the legendary Round-Based Zombies mode.',
        releaseDate: '2025-11-14'
      }
    ];
  }
}