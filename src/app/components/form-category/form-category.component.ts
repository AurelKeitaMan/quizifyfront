import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css'],
})
export class FormCategoryComponent {
  formCategory!: FormGroup;
  @Output() submitFormCategory = new EventEmitter<Category>();
  @Input() category!: Category;
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (this.category) {
      this.formCategory = new FormGroup({
        libelle: new FormControl(this.category.libelle),
      });
    } else {
      this.formCategory = new FormGroup({
        libelle: new FormControl(),
      });
    }
  }

  onSubmitForm() {
    this.submitFormCategory.emit(this.formCategory.value);
  }
}
