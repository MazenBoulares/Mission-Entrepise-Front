import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User,users } from 'src/app/services/interface/interface';
import { userPreferencesService } from 'src/app/services/userPreferencesService.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-common-user-details',
  templateUrl: './common-user-details.component.html',
  styleUrls: ['./common-user-details.component.scss']
})
export class CommonUserDetailsComponent {


 
  @Input() isFirstElement: boolean;

  @Input() userDetails: User;
  @Input() property: boolean;
  @Input() type: string;

  @Output() userDeleted = new EventEmitter<number>();

  public isMobile: boolean = false;
  public mobileNumber: string;

  constructor(private router: Router, private userPreferenceService: userPreferencesService, private toastr: ToastrService){}

  ngOnInit(){

    console.log("the rommmate ");
console.log(this.userDetails.roommate);


    this.mobileNumber = this.userDetails.phoneNumber.replace(this.userDetails.phoneNumber.slice(-4), '****' );
    console.log(this.mobileNumber)
  }


  showMobile(data: User){
    this.isMobile =! this.isMobile;
    if(this.isMobile){
      this.mobileNumber = data.phoneNumber
    }else{
      this.mobileNumber = data.phoneNumber.replace(data.phoneNumber.slice(-4),"****");
    }
  }


  getUserPreferencesText(): string {
    let preferenceText = '';
  
    // A divider to indicate personal details section
    preferenceText += '<div style="margin-bottom: 10px; font-weight: bold;">Personal Details</div>';
  
    // Check user preferences and generate text accordingly
    if (this.userDetails.roommate.alcohol) {
      preferenceText += '<div style="margin-bottom: 5px;"><i class="fas fa-wine-glass"></i> Alcohol: Yes</div>';
    } else {
      preferenceText += '<div style="margin-bottom: 5px;"><i class="fas fa-times"></i> Alcohol: No</div>';
    }
  
    if (this.userDetails.roommate.smoking) {
      preferenceText += '<div style="margin-bottom: 5px;"><i class="fas fa-smoking"></i> Smoking: Yes</div>';
    } else {
      preferenceText += '<div style="margin-bottom: 5px;"><i class="fas fa-times"></i> Smoking: No</div>';
    }
  
    // Check gender preference
    if (this.userDetails.roommate.gender === "0") {
      preferenceText += '<div style="margin-bottom: 5px;"><i class="fas fa-male"></i> Gender: Male</div>';
    } else if (this.userDetails.roommate.gender === "1") {
      preferenceText += '<div style="margin-bottom: 5px;"><i class="fas fa-female"></i> Gender: Female</div>';
    } else {
      preferenceText += '<div style="margin-bottom: 5px;"><i class="fas fa-transgender-alt"></i> Gender: Other</div>';
    }
  
    // Check cooking preference
    if (this.userDetails.roommate.cul_skills) {
      preferenceText += '<div style="margin-bottom: 5px;"><i class="fas fa-utensils"></i> Can Cook: Yes</div>';
    } else {
      preferenceText += '<div style="margin-bottom: 5px;"><i class="fas fa-times"></i> Can Cook: No</div>';
    }
  
    // A divider to indicate house preference section
    preferenceText += '<div style="margin-bottom: 10px; font-weight: bold;">House Preferences</div>';
  
    // Display rent budget
    preferenceText += `<div style="margin-bottom: 5px;"><i class="fas fa-dollar-sign"></i> Rent Budget: ${this.userDetails.roommate.rent_budget}</div>`;
  
    // Display max people
    preferenceText += `<div style="margin-bottom: 5px;"><i class="fas fa-users"></i> Max People: ${this.userDetails.roommate.maxPeople}</div>`;
  
    // Display number of rooms
    preferenceText += `<div style="margin-bottom: 5px;"><i class="fas fa-door-open"></i> Number of Rooms: ${this.userDetails.roommate.numRooms}</div>`;
  
    return preferenceText;
  }


  showPreferencesModal(): void {
    Swal.fire({
      title: 'User Preferences',
      html: this.getUserPreferencesText(),
      icon: 'info',
      confirmButtonText: 'Close'
    });
  }

  // deleteUser(user: User) {
  //   // Show confirmation dialog before deleting the user
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'You will not be able to recover this user!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#d33',
  //     cancelButtonColor: '#3085d6',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // Call the delete API endpoint
  //       this.userPreferenceService.deleteUser(user.userId).subscribe(
  //         () => {
  //           // Emit event to notify parent component about user deletion
  //           this.userDeleted.emit(user.userId);
  //           // Show success message
  //           this.toastr.success('User deleted successfully.', '', { timeOut: 3000 });
  //           setTimeout(() => {
  //             window.location.reload();
  //           }, 1000); 
  //         },
  //         (error) => {
  //           console.error('Error deleting user:', error);
  //           // Show error message
  //           this.toastr.error('Failed to delete user.', '', { timeOut: 3000 });
  //         }
  //       );
  //     }
  //   });

  // }


  // editUser() {
  //   // Navigate to the edit user component and pass the user data
  //   this.router.navigate(['/manage-user/edit-user'], { state: { user: this.userDetails } });
  // }


  
}
