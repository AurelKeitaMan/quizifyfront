import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  private urlApi = 'http://localhost:8080/api/reponse';
  constructor(private http: HttpClient) {}

  getResponses(): Observable<Object[]> {
    return this.http.get<Object[]>(this.urlApi);
  }

  getResponseById(id: number): Observable<Object> {
    return this.http.get<Object>(`${this.urlApi}/${id}`);
  }

  addResponse(response: Object): Observable<Object> {
    return this.http.post<Object>(this.urlApi, response);
  }

  deleteResponse(id: number) {
    return this.http.delete<Object>(`${this.urlApi}/${id}`);
  }

  updateResponse(id: number, response: Object): Observable<Object> {
    return this.http.put<Object>(`${this.urlApi}/${id}`, response);
  }
}
