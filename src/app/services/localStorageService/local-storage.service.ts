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


      getUserDataFromLocalStorage(): string | null {
        return localStorage.getItem('userData');
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

