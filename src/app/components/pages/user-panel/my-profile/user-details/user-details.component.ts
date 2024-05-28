import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditUserDetailsModalComponent } from '../../../../../shared/components/common/modal/edit-user-details-modal/edit-user-details-modal.component';
import { EditUserEmailModalComponent } from '../../../../../shared/components/common/modal/edit-user-email-modal/edit-user-email-modal.component';
import { EditUserPasswordModalComponent } from '../../../../../shared/components/common/modal/edit-user-password-modal/edit-user-password-modal.component';
import {CreateRoommatePreferencesModalComponent} from  '../../../../../shared/components/common/modal/CreateRoommatePreferencesModalComponent/CreateRoommatePreferencesModalComponent';

import {EditRoommatePreferencesModalComponent} from  '../../../../../shared/components/common/modal/EditRoommatePreferencesModalComponent/EditRoommatePreferencesModalComponent';
import { RoommatePreferencesService } from 'src/app/services/RoommatePreferencesService.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {


  roommatePreferences: any; // Variable to hold roommate preferences

  constructor(private modal: NgbModal) {}



  // ngOnInit(): void {
  //   // Fetch roommate preferences from the backend API
  //   this.roommatePreferencesService.getRoommatePreferences().subscribe(
  //     (data) => {
  //       this.roommatePreferences = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching roommate preferences:', error);
  //     }
  //   );
  // }


  editDetails() {
    this.modal.open(EditUserDetailsModalComponent, { size: 'lg', centered: true})
  }
  
  


  editPreferences() {
    const modalRef = this.modal.open(EditRoommatePreferencesModalComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.preferenceId = "5";
  }

  createPreferences() {
    // Open modal to create new preferences
    this.modal.open(CreateRoommatePreferencesModalComponent, { size: 'lg', centered: true });
  }


  

}
