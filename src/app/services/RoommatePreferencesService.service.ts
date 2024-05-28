import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoommatePreferencesService {
  private apiUrl = 'http://localhost:8082/roommate-preferences'; // Adjust the API endpoint as per your backend

  private flaskApiUrl = 'http://127.0.0.1:5000';


  constructor(private http: HttpClient) {}

  getRoommatePreferences(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createRoommatePreferences(preferences: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, preferences);
  }

  updateRoommatePreference(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }


  getRoommatePreferenceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  suggestPreferences(userPreferences: any): Observable<number[]> {
    return this.http.post<number[]>(`${this.flaskApiUrl}/find_closest_roommates`, userPreferences);
  }
  

  // Implement other CRUD operations as needed
}
