import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";

import { catchError, map, Observable, throwError } from "rxjs";
import { LocalStorageService } from "../localStorageService/local-storage.service";
import { jwtDecode } from "jwt-decode";
import {Environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {


    constructor(private http: HttpClient, private localStorageService: LocalStorageService,
    ) {
    }


    login(username: string, password: string): Observable<HttpResponse<any>> {
        return this.http.post<any>(
            `${Environment.api}login`,
            { username, password },
            {
                observe: 'response',
            }
        ).pipe(
            map(response => {
                this.localStorageService.storeUserDataToLocalStorage(response.body);
                this.localStorageService.storeToken(response.body.token);
                jwtDecode(response.body.token);
                return response;
            }),
            catchError(error => {
                console.error('Error occurred:', error);
                return throwError(error);
            })
        );
    }
    register(firstname: string, lastname: string, password: string, username: string): Observable<any> {
        return this.http.post<any>(Environment.api + 'register', {
            firstname,
            lastname,
            username,
            password,
        }).pipe(
            map(response => {
                this.localStorageService.storeToken(response.body.token);
                return response;
            }),
            catchError(error => {
                console.error('Error occurred:', error);
                return throwError(error);
            })
        );
    }

    logout(): void {
        this.localStorageService.clearStorage();
    }

}
