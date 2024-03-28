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
  totalScore: string = 'No Result';
  scoreParCategorie: { categorie: string; score: number }[] = [];

  constructor(
    private statsService: StatsService,
    private catServ: CategoryService
  ) {}

  ngOnInit(): void {
    this.nombrePartieJouee = +(localStorage.getItem('partieJouee') ?? 0);
    this.totalScore = `${this.CalPouR()}`;
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
    return +(localStorage.getItem(`good${e}`) ?? 0);
  }

  CalPouR() {
    const GoodR = +(localStorage.getItem('goodResponse') ?? 0);
    const BadR = +(localStorage.getItem('badResponse') ?? 0);
    const totalResponses = GoodR + BadR;
    const Result = Math.floor((GoodR / totalResponses) * 100);
    return Result === 0 ? 'N/A' : Result + '%';
  }
}
