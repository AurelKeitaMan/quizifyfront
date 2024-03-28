import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-my-stats-page',
  templateUrl: './my-stats-page.component.html',
  styleUrls: ['./my-stats-page.component.css'],
})
export class MyStatsPageComponent implements OnInit {
  nombrePartieJouee: number = 0;
  totalScore: number = 0;
  scoreParCategorie: { categorie: string; score: number }[] = [];

  constructor(
    private statsService: StatsService,
    private catServ: CategoryService
  ) {}

  ngOnInit(): void {
    this.nombrePartieJouee = +(localStorage.getItem('partieJouee') ?? 0);
    this.totalScore = +(localStorage.getItem('goodResponse') ?? 0);
    this.catServ.getCategories().subscribe((categories) => {
      this.scoreParCategorie = categories.map((category) => {
        return {
          categorie: category.libelle,
          score: this.metLocal(category.libelle),
        };
      });
    });
  }

  metLocal(e: string): number {
    console.log(e);

    return +(localStorage.getItem(`good${e}`) ?? 0);
  }
}
