import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-play-to-quiz',
  templateUrl: './play-to-quiz.component.html',
  styleUrls: ['./play-to-quiz.component.css']
})
export class PlayToQuizComponent implements OnInit {
  options!: Category[];
  selectedOption!: string;

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => {
        this.options = data
      },
      error => {
        console.error('Une erreur est survenue lors du chargement des catégories : ', error);
      }
    );
  }

  onSubmit(id :number) {
    console.log('Option sélectionnée : ', this.selectedOption);
    if (this.selectedOption) {
      this.router.navigate(['/quiz/question/',id]);
      switch (this.selectedOption.toLowerCase()) {
        case '1':
          this.router.navigate(['/quiz/question/1']);
          break;
        case 'musique':
          this.router.navigate(['/quiz/question/2']);
          break;
        case 'cinema':
          this.router.navigate(['/quiz/question/3']);
          break;
        case 'sport':
          this.router.navigate(['/quiz/question/4']);
          break;
        default:
          break;
      }
    }
  }
}
