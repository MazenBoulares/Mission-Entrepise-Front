import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User,users } from 'src/app/services/interface/interface';
import { userPreferencesService } from 'src/app/services/userPreferencesService.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-common-user-details',
  templateUrl: './common-user-details.component.html',
  styleUrls: ['./common-user-details.component.scss']
})
export class CommonUserDetailsComponent {


 


  @Input() userDetails: User;
  @Input() property: boolean;
  @Input() type: string;

  @Output() userDeleted = new EventEmitter<number>();

  public isMobile: boolean = false;
  public mobileNumber: string;

  constructor(private router: Router, private userPreferenceService: userPreferencesService, private toastr: ToastrService){}

  ngOnInit(){
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





  deleteUser(user: User) {
    // Show confirmation dialog before deleting the user
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the delete API endpoint
        this.userPreferenceService.deleteUser(user.userId).subscribe(
          () => {
            // Emit event to notify parent component about user deletion
            this.userDeleted.emit(user.userId);
            // Show success message
            this.toastr.success('User deleted successfully.', '', { timeOut: 3000 });
            setTimeout(() => {
              window.location.reload();
            }, 1000); 
          },
          (error) => {
            console.error('Error deleting user:', error);
            // Show error message
            this.toastr.error('Failed to delete user.', '', { timeOut: 3000 });
          }
        );
      }
    });

  }


  editUser() {
    // Navigate to the edit user component and pass the user data
    this.router.navigate(['/manage-user/edit-user'], { state: { user: this.userDetails } });
  }


  
}
