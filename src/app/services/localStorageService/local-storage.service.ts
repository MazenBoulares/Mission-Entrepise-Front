import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() {
    }

    storeToken(token: string): void {
        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }


    getTokenClaims(): any {
        const token = this.getToken();
        if (token) {
            // const decodedToken = jwt_decode(token);
            return null;
        }
        return null;
    }
}

