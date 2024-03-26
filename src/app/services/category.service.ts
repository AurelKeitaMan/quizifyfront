import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private urlApi = 'http://localhost:8080/api/categorie';
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Object[]> {
    return this.http.get<Object[]>(this.urlApi);
  }

  getCategoryById(id: number): Observable<Object> {
    return this.http.get<Object>(`${this.urlApi}/${id}`);
  }

  addCategory(category: Object): Observable<Object> {
    return this.http.post<Object>(this.urlApi, category);
  }

  deleteCategory(id: number) {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete<Object>(url);
  }

  updateCategory(id: number, category: Object): Observable<Object> {
    const url = `${this.urlApi}/${id}`;
    return this.http.put<Object>(url, category);
  }
}
