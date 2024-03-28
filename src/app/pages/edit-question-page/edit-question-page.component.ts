import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-edit-question-page',
  templateUrl: './edit-question-page.component.html',
  styleUrls: ['./edit-question-page.component.css']
})
export class EditQuestionPageComponent implements OnInit {
  questionUp!: Question;
  id!: number;

  constructor(private questionService: QuestionService, private router:Router, private route: ActivatedRoute){}
  
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      if(param){
        const id = param.get('id')!;
        this.id = +id;
        this.questionService.getQuestionById(+id).subscribe((question) => {
          if(question){
            this.questionUp = { ...question};
          }
        });
      }
    });
  }

  updateQuestion(question: Question){
    this.questionService.updateQuestion(this.id, question).subscribe(() => {
      this.router.navigate(['/admin']);
    })
  }

}
