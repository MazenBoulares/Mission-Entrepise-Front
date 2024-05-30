import { Component } from '@angular/core';
import { users, User} from '../../../../services/interface/interface';
import { userPreferencesService } from 'src/app/services/userPreferencesService.service';
import { UserService } from 'src/app/services/userService';


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent {

  currentUser: any;

  // public userData: users[];

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Dashboard';
  public parent = 'Home';
  public child = 'Cards & Payment';

  // public cardsData = cardsData;

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';


  public userData: User[];

  constructor(private userService: UserService,private userPreferenceService: userPreferencesService){
    this.fetchUserData();

   
  
  }


ngOnInit(){
  this.currentUser = this.userService.currentUser;
  console.log(this.currentUser);
}

  fetchUserData(): void {
    this.userPreferenceService.getUsers2().subscribe(
      (data: User[]) => {
        this.userData = data;
        // console.log(data);
        // Logging user IDs
        this.userData.forEach(user => {
          console.log('User ID:', user.userId);
        });
      },
      (error) => {
        console.error('Error fetching user data: ', error);
      }
    );
  }

  // trackByUserId(index: number, item: User): number {
  //   return item.userId; // Assuming userId is a unique identifier for each user
  // }


}
