import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) { }

  predictPrice(data: { numRooms: number, numBathrooms: number, squareMeterage: number, conditionCategory: string, location: string }): Observable<any> {
    const payload = {
      "Number of rooms": data.numRooms,
      "Number of Bathrooms": data.numBathrooms,
      "Square Meterage": data.squareMeterage,
      "Condition Category": parseInt(data.conditionCategory,10),
      "Location": data.location
    };
    console.log(payload)

    return this.http.post<any>('http://localhost:5000/predict', payload);
  }
}