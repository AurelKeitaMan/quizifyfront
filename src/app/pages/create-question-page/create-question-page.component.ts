import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormUp } from 'src/app/models/form-up';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-create-question-page',
  templateUrl: './create-question-page.component.html',
  styleUrls: ['./create-question-page.component.css'],
})
export class CreateQuestionPageComponent {
  id!: number;
  constructor(
    private questionservice: QuestionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      if (param) {
        const id = param.get('id')!;
        this.id = +id;
      }
    });
  }

  addQuestion(question: FormGroup) {
    console.log(question);
    this.router.navigate(['/admin/category', this.id]);
    this.questionservice.addQuestion(question.value, this.id).subscribe(() => {});
  }
}
