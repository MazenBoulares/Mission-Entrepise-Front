import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Feature } from '../classes/features';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http: HttpClient) {}
  token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huZG9lIiwiZmlyc3ROYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiRG9lIiwiZXhwIjoxNzEzNjA3MTc4LCJpYXQiOjE3MTM2MDM1Nzh9._JD8tuOkd5negPnAdhy1_DYBH9u8lMGEmb6NM5EfqXA";

  headers = new HttpHeaders({
   'Authorization': `Bearer ${this.token}`
 });

  // Home Slider Data
  addNewProperty(property:any): Observable<any> {
    console.log("inside add property ")
    console.log(property)
    return this.http.post<any>('http://localhost:8082/property/add',property,{headers:this.headers}).pipe(
      catchError((error) => {
        console.error('Error occurred while adding property:', error);
        return throwError(() => error);  // or return a default value
      })
    );;
  }
}
