import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { FormUp } from '../models/form-up';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private urlApi = 'http://localhost:8080/api/question';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.urlApi);
  }
  getQuestionsByCategory(id: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.urlApi}/${id}/categorie`);
  }
  getRandomQuestionsByCategory(id: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.urlApi}/random/${id}`);
  }
  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.urlApi}/${id}`);
  }

  addQuestion(question: FormUp, id: number): Observable<FormUp> {
    return this.http.post<FormUp>(`${this.urlApi}/${id}`, question);
  }
  addQuestionB(question: Question): Observable<Question> {
    return this.http.post<Question>(this.urlApi, question);
  }

  deleteQuestion(id: number) {
    return this.http.delete<Question>(`${this.urlApi}/${id}`);
  }

  updateQuestion(id: number, question: Question): Observable<Question> {
    return this.http.put<Question>(`${this.urlApi}/${id}`, question);
  }
}
