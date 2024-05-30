import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DocuSignService {


  private apiUrl = Environment.api+'docusign/send';

  constructor(private http: HttpClient) { }

  sendDocument(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.apiUrl, formData);
  }
}
