import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Question } from 'src/app/models/question';
import { CategoryService } from 'src/app/services/category.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
[x: string]: any;
  categories!: Category;
  questions: Question[] = [];
  selectedOption: string | null = null;
  currentQuestionIndex: number = 0;

  constructor(
    private categoryService: CategoryService,
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      if (param) {
        const id = param.get('id')!;
        this.categoryService.getCategoryById(+id).subscribe((data: Category) => {
          this.categories = data;
        });
        
        this.questionService.getRandomQuestionsByCategory(+id).subscribe((data: Question[]) => {
          this.questions = data;
        });
      }
    });
  }
  
  selectOption(option: string) {
    this.selectedOption = option;
  }

  envoyerReponse(option: string) {
    // Effectuer une requête HTTP pour envoyer la réponse au serveur
  }

  passerQuestionSuivante() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = null;
    } else {
      console.log("Fin des questions");
    }
  }
}
