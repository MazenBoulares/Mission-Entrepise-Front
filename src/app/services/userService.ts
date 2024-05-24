import { Injectable } from '@angular/core';
import {User} from "../classes/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User | null = null;

  constructor() { }
}
