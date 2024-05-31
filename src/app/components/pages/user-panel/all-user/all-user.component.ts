import { Component, OnInit, Input } from '@angular/core';
import { users, User} from '../../../../services/interface/interface';
import { userPreferencesService } from 'src/app/services/userPreferencesService.service';
import { UserService } from 'src/app/services/userService';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorageService/local-storage.service';
import { ClosestRoommatesService } from 'src/app/services/closestRommatesService.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent {


  currentUser: any;
  fullCurrentUser: any;
  userData2: any;

  closestRoommates: any;


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


  public userData: any[];



  constructor(private closestRoommatesService: ClosestRoommatesService,private userService: UserService,private userPreferenceService: userPreferencesService,  private route: ActivatedRoute,
    private localStorageService: LocalStorageService
   ){
    // this.fetchUserData();

   
  
  }


// ngOnInit(){







// // Get closest roommates data from route state
// const state = this.route.snapshot.firstChild?.firstChild?.data;
// if (state && state['closestRoommates']) {
//   this.closestRoommates = state['closestRoommates'];
//   console.log('Closest Roommates:', this.closestRoommates);

ngOnInit(): void {
  this.closestRoommates = this.closestRoommatesService.getClosestRoommates().closest_roommates; 

  this.userData = []; // Initialize userData as an empty array

  this.closestRoommates.forEach((roommate: any) => {
    const userId = roommate.user_id;
    console.log(userId);
    this.userPreferenceService.getUserById(userId).subscribe(
      (userData2: any) => {
        userData2.roommate = roommate;
        this.userData.push(userData2); 
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  });

  console.log(this.userData);
}


}
// this.closestRoommates.forEach((roommate, index) => {
//   console.log(`Roommate ${index + 1}`);
//   console.log('Address:', roommate.address);
//   console.log('Alcohol:', roommate.alcohol);
//   // Add more properties as needed
// });

// this.closestRoommates.forEach(roommate => {
//   const userId = roommate.user_id;
//   console.log(userId);
//   this.userPreferenceService.getUserById(userId).subscribe(
  
//     //   //   (userData: User) => {
//     //   //     this.userData.push(userData); // Add user data to the array
//     //   //   },
//     //   //   (error) => {
//     //   //     console.error('Error fetching user data:', error);
//     //   //   }
//     //   // );
//   )

// })






// ngOnInit(): void {

  // console.log(this.route.snapshot.firstChild);

  // const state = this.route.snapshot.firstChild?.firstChild?.data;
  // if (state && state['closestRoommates']) {
  //   this.closestRoommates = state['closestRoommates'];
  //   console.log('Closest Roommates:', state['closestRoommates']);
    // Now you can use this.closestRoommates as needed in this component



  // }

//   // ***** auth (will be trasnfered to HOME later) *****
//   this.userData2 = this.localStorageService.getUserDataFromLocalStorage();
//   if (this.userData2) {
//     this.userService.currentUser = this.userData2;
//   } else {
//     console.error('User data not found in local storage');
//   }
// // ***** /auth (will be trasnfered to HOME later) *****



//   // Get closest roommates data from route state
//   const state = this.route.snapshot.firstChild?.firstChild?.data;
//   if (state && state['closestRoommates']) {


//     this.closestRoommates = state['closestRoommates'];

//     console.log(this.closestRoommates);


// // Iterate through closest roommates
// for (const roommate of this.closestRoommates) {
//   console.log('Address:', roommate.address);
//   console.log('Alcohol:', roommate.alcohol);
//   // Add more properties as needed
// }

    // this.closestRoommates = state['closestRoommates'];
    // console.log('Closest Roommates:', this.closestRoommates);
    // // Fetch user details for each closest roommate
    // this.closestRoommates.forEach(roommate => {
    //   console.log("1")

    //   const userId = roommate.user_id;

    //   console.log(userId);

    //   // this.userService.getUserById(userId).subscribe(
    //   //   (userData: User) => {
    //   //     this.userData.push(userData); // Add user data to the array
    //   //   },
    //   //   (error) => {
    //   //     console.error('Error fetching user data:', error);
    //   //   }
    //   // );
    // });
  












  // fetchUserData(): void {
  //   this.userPreferenceService.getUsers2().subscribe(
  //     (data: User[]) => {
  //       this.userData = data;
  //       // console.log(data);
  //       // Logging user IDs
  //       this.userData.forEach(user => {
  //         console.log('User ID:', user.userId);
  //       });
  //     },
  //     (error) => {
  //       console.error('Error fetching user data: ', error);
  //     }
  //   );
  // }




