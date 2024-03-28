import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  getCategoriesById() {
    throw new Error('Method not implemented.');
  }
  static id(id: any) {
    throw new Error('Method not implemented.');
  }
  private urlApi = 'http://localhost:8080/api/categorie';
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.urlApi);
  }
  getCategoriesForQuiz(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.urlApi}/q3`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.urlApi}/${id}`);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.urlApi, category);
  }

  deleteCategory(id: number) {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete<Category>(url);
  }

  updateCategory(id: number, category: Category): Observable<Object> {
    const url = `${this.urlApi}/${id}`;
    return this.http.put<Object>(url, category);
  }
}
