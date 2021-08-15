import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission.model';

const baseUrl = 'http://localhost:8080/api/Missions';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Mission[]> {
    return this.http.get<Mission[]>(baseUrl);
  }

  get(id: any): Observable<Mission> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByTitle(title: any): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${baseUrl}?title=${title}`);
  }
}