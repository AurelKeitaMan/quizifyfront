import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-play-to-quiz',
  templateUrl: './play-to-quiz.component.html',
  styleUrls: ['./play-to-quiz.component.css']
})
export class PlayToQuizComponent implements OnInit {
  options = ['Animaux', 'Musique', 'Cinéma', 'Sport'];
  selectedOption!: string;

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (data: any[]) => {
        this.options = data.map(category => category.name);
      },
      error => {
        console.error('Une erreur est survenue lors du chargement des catégories : ', error);
      }
    );
  }

  onSubmit() {
    console.log('Option sélectionnée : ', this.selectedOption);
    if (this.selectedOption) {
      // Rediriger en fonction de l'option sélectionnée
      switch (this.selectedOption.toLowerCase()) {
        case 'animaux':
          this.router.navigate(['/quiz/question']);
          break;
        case 'musique':
          this.router.navigate(['/quiz/question']);
          break;
        case 'cinéma':
          this.router.navigate(['/quiz/question']);
          break;
        case 'sport':
          this.router.navigate(['/quiz/question']);
          break;
        default:
          break;
      }
    }
  }
}
