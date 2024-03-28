import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-quest-categorizer',
  templateUrl: './quest-categorizer.component.html',
  styleUrls: ['./quest-categorizer.component.css'],
})
export class QuestCategorizerComponent implements OnInit {
  questionToDisplay: Question[] = [];
  id!:number;
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      if (param) {
        const id = param.get('id')!;
        this.id=+id;
        this.questionService
          .getQuestionsByCategory(+id)
          .subscribe((question) => {
            this.questionToDisplay = [...question];
          });
      }
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
