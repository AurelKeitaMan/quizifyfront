import { Component } from '@angular/core';

@Component({
  selector: 'app-play-to-quiz',
  templateUrl: './play-to-quiz.component.html',
  styleUrls: ['./play-to-quiz.component.css']
})
export class PlayToQuizComponent {
options = ['Animaux', 'Musique', 'Cinéma', 'Sport'];
  selectedOption!: string;
}
