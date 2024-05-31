import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Feature } from '../classes/features';
import {ACCESS_TOKEN} from "./constante";
import { Environment } from '../environments/environment';
// import '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  getPager(length: number, arg1: number): import("../shared/interface/property").pagination {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
   'Authorization': `Bearer ${ACCESS_TOKEN}`
 });

  // Home Slider Data
  addNewProperty(property:any): Observable<any> {
    console.log("inside add property ")
    console.log(property)
    return this.http.post<any>(Environment.api+'property/add',property,{headers:this.headers}).pipe(
      catchError((error) => {
        console.error('Error occurred while adding property:', error);
        return throwError(() => error);  // or return a default value
      })
    );;
  }
    getPropertyById(Id: any){
        return this.http.get(Environment.api+`property/get/${Id}`);
    }
  getAllProperties():Observable<any>{
    console.log("inside get all property ")
    return this.http.get<any>(Environment.api+'property/getAll',).pipe(
      catchError((error) => {
        console.error('Error occurred while getting  properties:', error);
        return throwError(() => error);  // or return a default value
      })
    );;
  }
}
