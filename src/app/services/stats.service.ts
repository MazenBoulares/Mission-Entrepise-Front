import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getListingsByType(landlordId: number): Observable<Map<string, number>> {
    const url = Environment.api+`listing/${landlordId}/listings-by-type`;
    return this.http.get<Map<string, number>>(url);
  }
  getPropertyByLanlordId(landlordId: number): Observable<Number> {
    const url = Environment.api+`property/landlord/${landlordId}/total-properties`;
    return this.http.get<Number>(url);
  }
  getListingByLanlordId(landlordId: number): Observable<Number> {
    const url = Environment.api+`listing/${landlordId}/total-listings`;
    return this.http.get<Number>(url);
  }
}