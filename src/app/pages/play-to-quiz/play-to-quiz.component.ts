import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-play-to-quiz',
  templateUrl: './play-to-quiz.component.html',
  styleUrls: ['./play-to-quiz.component.css'],
})
export class PlayToQuizComponent implements OnInit {
  options!: Category[];
  selectedOption!: string;
  categories: any;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategoriesForQuiz().subscribe(
      (data: Category[]) => {
        this.options = data;
      },
      (error) => {
        console.error(
          'Une erreur est survenue lors du chargement des catégories : ',
          error
        );
      }
    );
  }

  isSelected(optionId: string): boolean {
    console.log("C'est bon ça fonctionne, Catégorie sélectionnée :", optionId);
    return this.selectedOption === optionId;
  }

  onSubmit(selectedCategoryId: string) {
    console.log('Catégorie sélectionnée : ', selectedCategoryId);
    if (selectedCategoryId) {
      console.log(this.selectedOption);

      this.router.navigate(['/quiz/question/', selectedCategoryId]);
    }
  }
}
