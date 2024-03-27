import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category-page',
  templateUrl: './edit-category-page.component.html',
  styleUrls: ['./edit-category-page.component.css'],
})
export class EditCategoryPageComponent {
  categoryUp!: Category;
  id!: number;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      if (param) {
        const id = param.get('id')!;
        this.id = +id;
        this.categoryService.getCategoryById(+id).subscribe((category) => {
          if (category) {
            this.categoryUp = { ...category };
          }
        });
      }
    });
  }
  updateCategory(category: Category) {
    this.categoryService.updateCategory(this.id, category).subscribe(() => {
      console.log('ok');
      this.router.navigate(['/admin']);
    });
  }
}
