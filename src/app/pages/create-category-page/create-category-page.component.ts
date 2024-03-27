import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category-page',
  templateUrl: './create-category-page.component.html',
  styleUrls: ['./create-category-page.component.css'],
})
export class CreateCategoryPageComponent {
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}
  addCategory(category: Category) {
    this.categoryService.addCategory(category).subscribe(() => {
      console.log('ok');
      this.router.navigate(['/admin']);
    });
  }
}
