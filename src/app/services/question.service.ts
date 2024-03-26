import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private urlApi = 'http://localhost:8080/api/question';
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Object[]> {
    return this.http.get<Object[]>(this.urlApi);
  }

  getQuestionById(id: number): Observable<Object> {
    return this.http.get<Object>(`${this.urlApi}/${id}`);
  }

  addQuestion(question: Object): Observable<Object> {
    return this.http.post<Object>(this.urlApi, question);
  }

  deleteQuestion(id: number) {
    return this.http.delete<Object>(`${this.urlApi}/${id}`);
  }

  updateQuestion(id: number, question: Object): Observable<Object> {
    return this.http.put<Object>(`${this.urlApi}/${id}`, question);
  }
}
