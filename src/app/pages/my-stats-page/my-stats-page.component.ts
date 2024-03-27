import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-my-stats-page',
  templateUrl: './my-stats-page.component.html',
  styleUrls: ['./my-stats-page.component.css']
})
export class MyStatsPageComponent implements OnInit {
  nombrePartieJouee: number = 0;
  totalScore: number = 0;
  scoreParCategorie: { categorie: string, score: number }[] = [];


  constructor(private statsService: StatsService){}


  ngOnInit(): void {
    this.nombrePartieJouee = this.statsService.nombrePartieJouee;
    this.totalScore = this.statsService.totalScore;
    this.scoreParCategorie = this.statsService.scoreParCategorie;
  }

}
