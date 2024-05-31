import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorageService/local-storage.service';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent { 
  currentUser: any;
  fullCurrentUser: any;
  closestRoommates: any;
  userData: any;

  constructor(private userService: UserService, private localStorageService: LocalStorageService){}

  
  ngOnInit(): void {
  // ***** auth (will be trasnfered to HOME later) *****
  this.userData = this.localStorageService.getUserDataFromLocalStorage();
  if (this.userData) {
    this.userService.currentUser = this.userData;
  } else {
    console.error('User data not found in local storage');
  }
// ***** /auth (will be trasnfered to HOME later) *****
}

}
