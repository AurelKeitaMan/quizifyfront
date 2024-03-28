import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent {
  categories!: Category;
  selectedOption: string | null = null;

  constructor(private categoryService: CategoryService) { }

  selectOption(option: string) {
    this.selectedOption = option;
  }
  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService.getCategoryById(1).subscribe(
      (data: Category) => {
        this.categories = data;
        
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des catégories : ', error);
      }
    );
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
