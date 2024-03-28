import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit{

formQuestion!:FormGroup;
@Output() submitFormQuestion = new EventEmitter<Question>();
@Input() question!: Question;
@Input() id!:number

constructor(private router : Router){}

ngOnInit(): void {
  this.initForm();
}
  initForm() {
      this.formQuestion = new FormGroup({
        libelle: new FormControl(),
        reponse1: new FormControl(),
        reponse2: new FormControl(),
        reponse3: new FormControl(),
        reponse4: new FormControl(),
      });
    }

  onSubmitForm(){
    this.submitFormQuestion.emit(this.formQuestion.value);
  }
}
