import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-quest-categorizer',
  templateUrl: './quest-categorizer.component.html',
  styleUrls: ['./quest-categorizer.component.css'],
})
export class QuestCategorizerComponent implements OnInit {
  questionToDisplay: Question[] = [];
  constructor(private questionService: QuestionService) {}
  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((question) => {
      this.questionToDisplay = [...question];
    });
  }

  deleteQuestion(id: number) {
    this.questionService.deleteQuestion(id).subscribe(() => {
      console.log('ok');
      this.questionToDisplay = [
        ...this.questionToDisplay.filter((c) => c.id !== id),
      ];
    });
  }
}
