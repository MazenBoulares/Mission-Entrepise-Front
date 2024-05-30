
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoommatePreferencesService } from 'src/app/services/RoommatePreferencesService.service';
import { EditRoommatePreferencesModalComponent } from 'src/app/shared/components/common/modal/EditRoommatePreferencesModalComponent/EditRoommatePreferencesModalComponent';
import { CreateRoommatePreferencesModalComponent } from 'src/app/shared/components/common/modal/CreateRoommatePreferencesModalComponent/CreateRoommatePreferencesModalComponent';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService';
import { userPreferencesService } from 'src/app/services/userPreferencesService.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  roommatePreferences: any = null;
  userId: number = 1; // Example user ID, replace with actual user logic
  preferenceId: any = null;

  userPreferencesModel: any = {
    gender: '1',
    rent_budget: 4000,
    alcohol: 1,
    dist_from_uni: 10,
    smoking: 1,
    cul_skills: 1,
    hasHall: 1,
    maxPeople: 1,
    numRooms: 5
  };

  currentUser: any;
  fullCurrentUser: any;
  closestRoommates: number[] = [];

  constructor(
    private userPreferencesService: userPreferencesService,
    private userService: UserService,
    private router: Router,
    private modal: NgbModal,
    private roommatePreferencesService: RoommatePreferencesService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;

    if (this.currentUser && this.currentUser.userId) {
      this.userId = this.currentUser.userId;
      this.userPreferencesService.getUserById(this.currentUser.userId).subscribe(
        (data: any) => {
          this.fullCurrentUser = data;
          this.preferenceId = this.fullCurrentUser.preferenceId;

          // Fetch preferences using the new method
          this.fetchPreferencesByUserId(this.userId);
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    } else {
      console.error('Error: currentUser or userId is undefined');
    }
  }

  fetchPreferencesByUserId(userId: number) {
    this.roommatePreferencesService.getRoommatePreferenceByUserId(userId).subscribe(
      (data) => {
        this.roommatePreferences = data;
      },
      (error) => {
        console.error('Error fetching preference data:', error);
      }
    );
  }

  editPreferences() {
    const modalRef = this.modal.open(EditRoommatePreferencesModalComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.preferenceId = this.preferenceId;
  }

  createPreferences() {
    const modalRef = this.modal.open(CreateRoommatePreferencesModalComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.userId = this.userId; // Pass user ID to the modal component

    modalRef.result.then(
      (result) => {
        if (result === 'success') {
          this.roommatePreferencesService.getLatestPreferenceId().subscribe(
            (latestPreferenceId) => {
              console.log("latest prefernece service", latestPreferenceId );
              if (this.fullCurrentUser && this.fullCurrentUser.userId) {
                this.fullCurrentUser.preferenceId = latestPreferenceId;
                this.userPreferencesService.updateUser(this.fullCurrentUser.userId, this.fullCurrentUser).subscribe(
                  (response) => {
                    console.log('User preferenceId updated successfully:', response);
                  },
                  (error) => {
                    console.error('Error updating user preferenceId:', error);
                  }
                );
              } else {
                console.error('Error: currentUser or userId is undefined');
              }
            },
            (error) => {
              console.error('Error fetching latest preference ID:', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error creating roommate preferences:', error);
      }
    );
  }

  suggestRoommate() {
    this.userPreferencesModel.gender = this.roommatePreferences.gender === 'female' ? '1' : '0';
    this.userPreferencesModel.rent_budget = this.roommatePreferences.rentBudget;
    this.userPreferencesModel.alcohol = this.roommatePreferences.alcoholConsumption ? 1 : 0;
    this.userPreferencesModel.dist_from_uni = this.roommatePreferences.distFromUni;
    this.userPreferencesModel.smoking = this.roommatePreferences.smoking ? 1 : 0;
    this.userPreferencesModel.cul_skills = this.roommatePreferences.lovesCooking ? 1 : 0;
    this.userPreferencesModel.hasHall = this.roommatePreferences.hasHall ? 1 : 0;
    this.userPreferencesModel.maxPeople = this.roommatePreferences.maxPeople;
    this.userPreferencesModel.numRooms = this.roommatePreferences.numRooms;

    this.roommatePreferencesService.suggestPreferences(this.userPreferencesModel).subscribe(
      (closestRoommates: number[]) => {
        this.closestRoommates = closestRoommates;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}



// import { Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { RoommatePreferencesService } from 'src/app/services/RoommatePreferencesService.service';
// import { EditRoommatePreferencesModalComponent } from 'src/app/shared/components/common/modal/EditRoommatePreferencesModalComponent/EditRoommatePreferencesModalComponent';
// import { CreateRoommatePreferencesModalComponent } from 'src/app/shared/components/common/modal/CreateRoommatePreferencesModalComponent/CreateRoommatePreferencesModalComponent';
// import { Router } from '@angular/router';
// import { UserService } from 'src/app/services/userService';
// import { userPreferencesService } from 'src/app/services/userPreferencesService.service';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.scss'],
// })
// export class UserDetailsComponent implements OnInit {
//   roommatePreferences: any = null;
//   userId: number = 1; // Example user ID, replace with actual user logic
//   preferenceId: any = null;

//   userPreferencesModel: any = {
//     gender: '1',
//     rent_budget: 4000,
//     alcohol: 1,
//     dist_from_uni: 10,
//     smoking: 1,
//     cul_skills: 1,
//     hasHall: 1,
//     maxPeople: 1,
//     numRooms: 5
//   };

//   currentUser: any;
//   fullCurrentUser: any;
//   closestRoommates: number[] = [];

//   constructor(
//     private userPreferencesService: userPreferencesService,
//     private userService: UserService,
//     private router: Router,
//     private modal: NgbModal,
//     private roommatePreferencesService: RoommatePreferencesService
//   ) { }

//   ngOnInit(): void {
//     this.currentUser = this.userService.currentUser;

//     if (this.currentUser && this.currentUser.userId) {
//       this.userId = this.currentUser.userId;
//       this.userPreferencesService.getUserById(this.currentUser.userId).subscribe(
//         (data: any) => {
//           this.fullCurrentUser = data;
//           this.preferenceId = this.fullCurrentUser.preferenceId;
//         },
//         (error) => {
//           console.error('Error fetching user details:', error);
//         }
//       );

//       this.fetchPreferences(this.preferenceId);
//     } else {
//       console.error('Error: currentUser or userId is undefined');
//     }
//   }

//   fetchPreferences(Id: number) {
//     this.roommatePreferencesService.getRoommatePreferenceById(Id).subscribe(
//       (data) => {
//         this.roommatePreferences = data;
//       },
//       (error) => {
//         console.error('Error fetching preference data:', error);
//       }
//     );
//   }

//   editPreferences() {
//     const modalRef = this.modal.open(EditRoommatePreferencesModalComponent, { size: 'lg', centered: true });
//     modalRef.componentInstance.preferenceId = this.preferenceId;
//   }

//   createPreferences() {
//     const modalRef = this.modal.open(CreateRoommatePreferencesModalComponent, { size: 'lg', centered: true });
//     modalRef.componentInstance.userId = this.userId; // Pass user ID to the modal component

//     modalRef.result.then(
//       (result) => {
//         if (result === 'success') {
//           this.roommatePreferencesService.getLatestPreferenceId().subscribe(
//             (latestPreferenceId) => {
//               console.log("latest prefernece service", latestPreferenceId );
//               if (this.fullCurrentUser && this.fullCurrentUser.userId) {
//                 this.fullCurrentUser.preferenceId = latestPreferenceId;
//                 this.userPreferencesService.updateUser(this.fullCurrentUser.userId, this.fullCurrentUser).subscribe(
//                   (response) => {
//                     console.log('User preferenceId updated successfully:', response);
//                   },
//                   (error) => {
//                     console.error('Error updating user preferenceId:', error);
//                   }
//                 );
//               } else {
//                 console.error('Error: currentUser or userId is undefined');
//               }
//             },
//             (error) => {
//               console.error('Error fetching latest preference ID:', error);
//             }
//           );
//         }
//       },
//       (error) => {
//         console.error('Error creating roommate preferences:', error);
//       }
//     );
//   }

//   suggestRoommate() {
//     this.userPreferencesModel.gender = this.roommatePreferences.gender === 'female' ? '1' : '0';
//     this.userPreferencesModel.rent_budget = this.roommatePreferences.rentBudget;
//     this.userPreferencesModel.alcohol = this.roommatePreferences.alcoholConsumption ? 1 : 0;
//     this.userPreferencesModel.dist_from_uni = this.roommatePreferences.distFromUni;
//     this.userPreferencesModel.smoking = this.roommatePreferences.smoking ? 1 : 0;
//     this.userPreferencesModel.cul_skills = this.roommatePreferences.lovesCooking ? 1 : 0;
//     this.userPreferencesModel.hasHall = this.roommatePreferences.hasHall ? 1 : 0;
//     this.userPreferencesModel.maxPeople = this.roommatePreferences.maxPeople;
//     this.userPreferencesModel.numRooms = this.roommatePreferences.numRooms;

//     this.roommatePreferencesService.suggestPreferences(this.userPreferencesModel).subscribe(
//       (closestRoommates: number[]) => {
//         this.closestRoommates = closestRoommates;
//       },
//       (error) => {
//         console.error('Error:', error);
//       }
//     );
//   }
// }
