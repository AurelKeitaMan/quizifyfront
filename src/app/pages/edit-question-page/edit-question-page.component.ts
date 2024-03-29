import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormUp } from 'src/app/models/form-up';
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
  idCat!: number;

  constructor(private questionService: QuestionService, private router:Router, private route: ActivatedRoute){}
  
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      if(param){
        const id = param.get('id')!;
        this.id = +id;
        const idCat = param.get('idCat')!;
        this.idCat = +idCat;
        this.questionService.getQuestionById(+id).subscribe((question) => {
          if(question){
            this.questionUp = { ...question};
          }
        });
      }
    });
  }

  updateQuestion(questionp: FormGroup){
    const question = questionp.value
    this.questionUp.libelle = question.libelle;
    this.questionUp.reponse[0].libelle = question.reponse1;
    this.questionUp.reponse[1].libelle = question.reponse2;
    this.questionUp.reponse[2].libelle = question.reponse3;
    this.questionUp.reponse[3].libelle = question.reponse4;
    
    this.questionService.updateQuestion(this.id, this.questionUp).subscribe(() => {
      this.router.navigate(['/admin/category',this.idCat]);
    })
  }

}
