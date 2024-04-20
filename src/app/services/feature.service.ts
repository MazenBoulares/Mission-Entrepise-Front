import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../classes/features';
@Injectable({
  providedIn: 'root'
})
export class FeatureService {

    
  constructor(private http: HttpClient) {}
  token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huZG9lIiwiZmlyc3ROYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiRG9lIiwiZXhwIjoxNzEzNjA3MTc4LCJpYXQiOjE3MTM2MDM1Nzh9._JD8tuOkd5negPnAdhy1_DYBH9u8lMGEmb6NM5EfqXA";

   headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  // Home Slider Data
  getAllFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>('http://localhost:8082/feature/getAll', { headers: this.headers });
  }
}
