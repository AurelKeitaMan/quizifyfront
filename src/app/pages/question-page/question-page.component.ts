import { Component } from '@angular/core';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent {
  selectedOption: string | null = null;

  constructor() { }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  valider() {
    if (this.selectedOption) {
      console.log("Option sélectionnée :", this.selectedOption);
      // Ajoutez ici la logique pour gérer la sélection, par exemple, envoyer la réponse au serveur, etc.
    } else {
      console.log("Aucune option sélectionnée");
      // Ajoutez ici la logique pour gérer le cas où aucune option n'est sélectionnée
    }
  }
}
