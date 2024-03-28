import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  nombrePartieJouee: number = 0;
  totalScore: number = 0;
  scoreParCategorie: {categorie: string,score: number }[] = [];


  constructor() { 
    this.nombrePartieJouee = 10; // test
    this.totalScore = 500; 
    this.scoreParCategorie = [
      { categorie:'Animaux', score: 200 },
      { categorie:'Musique',score: 150 },
      { categorie:'Cinéma',score: 500},
      { categorie:'Sport',score: 360},    
    ];
  }
}
