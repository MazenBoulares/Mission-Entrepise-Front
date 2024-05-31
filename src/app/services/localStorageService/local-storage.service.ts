import {Injectable} from '@angular/core';
import {User} from "../../classes/user";

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


  


    storeUserDataToLocalStorage(userData: any): void {
        const userDataToSave = {
          userId: userData.userId,
          username: userData.username,
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          phoneNumber: userData.phoneNumber,
          address: userData.address,
          dateOfBirth: userData.dateOfBirth
        };
      
        localStorage.setItem('userData', JSON.stringify(userDataToSave));
      }


    getUserDataFromLocalStorage(): User | null {
        const userData = localStorage.getItem('userData');
        return userData ? JSON.parse(userData) as User : null;
    }






    getTokenClaims(): any {
        const token = this.getToken();
        if (token) {
            // const decodedToken = jwt_decode(token);
            return null;
        }
        return null;
    }

    clearStorage(): void {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }


}

