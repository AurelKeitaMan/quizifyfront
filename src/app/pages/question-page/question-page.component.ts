import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Question } from 'src/app/models/question';
import { ResponseQ } from 'src/app/models/responseQ';
import { CategoryService } from 'src/app/services/category.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css'],
})
export class QuestionPageComponent implements OnInit {
  [x: string]: any;
  categories!: Category;
  questions: Question[] = [];
  selectedOption: number | null = null;
  currentQuestionIndex: number = 0;
  score = 0;

  constructor(
    private categoryService: CategoryService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      if (param) {
        const id = param.get('id')!;
        this.categoryService
          .getCategoryById(+id)
          .subscribe((data: Category) => {
            this.categories = data;
          });

        this.questionService
          .getRandomQuestionsByCategory(+id)
          .subscribe((data: Question[]) => {
            this.questions = data;
          });
      }
    });
  }

  selectOption(option: number) {
    this.selectedOption = option;
    console.log(option);
  }

  envoyerReponse(option: string) {
    // Effectuer une requête HTTP pour envoyer la réponse au serveur
  }

  passerQuestionSuivante() {
    for (const iterator of this.questions[this.currentQuestionIndex].reponse) {
      if (this.selectOption !== null) {
        if (iterator.id === this.selectedOption) {
          if (iterator.estCorrect) {
            this.score++;
            let good = +(localStorage.getItem('goodResponse') ?? 0);
            good++;
            localStorage.setItem('goodResponse', good.toString());
            const CatLocal = `good${
              this.questions[this.currentQuestionIndex].categorie.libelle
            }`;

            let goodCat = +(localStorage.getItem(CatLocal) ?? 0);
            goodCat++;
            localStorage.setItem(CatLocal, goodCat.toString());
          } else {
            let bad = +(localStorage.getItem('badResponse') ?? 0);
            bad++;
            localStorage.setItem('badResponse', bad.toString());
          }
        }
      }
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = null;
    } else {
      localStorage.setItem('score', this.score.toString());

      let partieJouee = +(localStorage.getItem('partieJouee') ?? 0);
      partieJouee++;
      localStorage.setItem('partieJouee', partieJouee.toString());
      this.router.navigate(['/quiz/result/']);
    }
  }
}
