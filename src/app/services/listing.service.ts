import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Feature } from '../classes/features';
import { ACCESS_TOKEN } from "./constante";
import '@angular/compiler';
import { Environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ListingService {
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Authorization': `Bearer ${ACCESS_TOKEN}`
  });
  getListingById(id: any): Observable<any> {
    console.log("get listing By Id")
    return this.http.get<any>(Environment.api+'listing/get/' + id).pipe(
      catchError((error) => {
        console.error('Error occurred while adding property:', error);
        return throwError(() => error);  // or return a default value
      }))
  }
  getListingWithRange(latitude: any,longitude:any,radius:any): Observable<any> {
    const params = new HttpParams()
    .set('latitude', latitude.toString())
    .set('longitude', longitude.toString())
    .set('radius', radius.toString());

    console.log("get listing By Range")
    return this.http.get<any>(Environment.api+'listing/within-range',{params}).pipe(
      catchError((error) => {
        console.error('Error occurred while adding property:', error);
        return throwError(() => error);  // or return a default value
      }))
  }
  // Home Slider Data
  addNewListing(listing: any, propertyId: number): Observable<any> {
    console.log("inside add listing ")
    console.log(listing)
    return this.http.post<any>('http://localhost:8082/listing/add/' + propertyId, listing, { headers: this.headers }).pipe(
      catchError((error) => {
        console.error('Error occurred while adding property:', error);
        return throwError(() => error);  // or return a default value
      })
    );
  }
  getAllListing(): Observable<any> {
    console.log("get All listing")
    return this.http.get<any>("http://localhost:8082/listing/getAll").pipe(
      catchError((error) => {
        console.error('Error occurred while adding property:', error);
        return throwError(() => error);  // or return a default value
      })
    );
  }
  public getPager(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 6
  ) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // Paginate Range
    let paginateRange = 3;

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage < paginateRange - 1) {
      startPage = 1;
      endPage = startPage + paginateRange - 1;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
}
