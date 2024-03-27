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

  isSelected(option: string): boolean {
    return this.selectedOption === option;
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
