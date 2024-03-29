import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css'],
})
export class FormQuestionComponent implements OnInit {
  formQuestion!: FormGroup;
  @Output() submitFormQuestion = new EventEmitter<FormGroup>();
  @Input() question!: Question;
  @Input() id!: number;
  path = `../../../category/`;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.question) {
      this.initForm1();
      this.path = `../${this.path}`;
    } else {
      this.initForm();
    }

    console.log(this.question);
  }
  initForm() {
    this.formQuestion = new FormGroup({
      libelle: new FormControl(),
      reponse1: new FormControl(),
      reponse2: new FormControl(),
      reponse3: new FormControl(),
      reponse4: new FormControl(),
      bonneReponse: new FormControl('reponse1'),
    });
  }
  initForm1() {
    let bn = 'none';
    this.question.reponse.forEach((reponse, index) => {
      if (reponse.estCorrect) {
        bn = 'reponse' + (index + 1);
      }
    });

    this.formQuestion = new FormGroup({
      libelle: new FormControl(this.question.libelle),
      reponse1: new FormControl(this.question.reponse[0].libelle),
      reponse2: new FormControl(this.question.reponse[1].libelle),
      reponse3: new FormControl(this.question.reponse[2].libelle),
      reponse4: new FormControl(this.question.reponse[3].libelle),
      bonneReponse: new FormControl(bn),
    });
  }

  onSubmitForm() {
    this.submitFormQuestion.emit(this.formQuestion);
  }
}
