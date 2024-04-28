import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../classes/features';
import {ACCESS_TOKEN} from "./constante";
@Injectable({
  providedIn: 'root'
})
export class FeatureService {

    
  constructor(private http: HttpClient) {}
   headers = new HttpHeaders({
    'Authorization': `Bearer ${ACCESS_TOKEN}`
  });

  // Home Slider Data
  getAllFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>('http://localhost:8082/feature/getAll');
  }
}
