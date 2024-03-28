import { Component } from '@angular/core';
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
export class QuestionPageComponent {
  categories!: Category;
  selectedOption: string | null = null;
  questions!: Question[];

  constructor(
    private categoryService: CategoryService,
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  selectOption(option: string) {
    this.selectedOption = option;
  }
  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      if (param) {
        const id = param.get('id')!;
        this.categoryService.getCategoryById(+id).subscribe((data: Category) => {
        this.categories = data;
        console.log("Catégorie ok", data);
            
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des catégories : ', error);
      }
    );}})

    this.route.paramMap.subscribe((param: ParamMap) => {
      if (param) {
        const id = param.get('id')!;
        this.questionService.getRandomQuestionsByCategory(+id).subscribe((data: Question[]) => {
        this.questions = data;
        console.log("Question ok", data);
            
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération de la question : ', error);
      }
    );}})

  }
  
   isSelected(option: string): boolean {
    return  this.selectedOption === option;
  }

  valider() {
    if (this.selectedOption) {
      console.log("Option sélectionnée :", this.selectedOption);
      // Envoyer la réponse au serveur
      this.envoyerReponse(this.selectedOption);
    } else {
      console.log("Aucune option sélectionnée");
      // Afficher un message à l'utilisateur lui indiquant qu'il doit sélectionner une option
    }
  }
    envoyerReponse(option: string) {
    // Effectuer une requête HTTP pour envoyer la réponse au serveur
  }
}
