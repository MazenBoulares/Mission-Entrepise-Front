import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Feature } from '../classes/features';
import {ACCESS_TOKEN} from "./constante";

@Injectable({
    providedIn: 'root'
})
export class ListingService {
    constructor(private http: HttpClient) {}

    headers = new HttpHeaders({
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    });

    // Home Slider Data
    addNewListing(listing:any,propertyId:number): Observable<any> {
        console.log("inside add listing ")
        console.log(listing)
        return this.http.post<any>('http://localhost:8082/listing/add/'+propertyId,listing,{headers:this.headers}).pipe(
            catchError((error) => {
                console.error('Error occurred while adding property:', error);
                return throwError(() => error);  // or return a default value
            })
        );;
    }
}
