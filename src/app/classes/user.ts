// user.model.ts

import {UserType} from "./userType";

export interface User {
    userId: number;
    username: string;
    password: string;
    token: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    dateOfBirth: Date;
    registrationDate: Date;
    userImageUrl: string;
    userType: UserType;
}
