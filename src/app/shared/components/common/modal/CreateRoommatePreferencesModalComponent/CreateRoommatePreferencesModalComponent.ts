import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RoommatePreferencesService } from 'src/app/services/RoommatePreferencesService.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-roommate-preferences-modal',
  templateUrl: './CreateRoommatePreferencesModalComponent.html',
  styleUrls: ['./CreateRoommatePreferencesModalComponent.scss']
})
export class CreateRoommatePreferencesModalComponent {
  @Input() userId: number; // Input to receive user ID

  preferences: any = {
    gender: '',
    birthday: '',
    address: '',
    city: '',
    state: '',
    workExperience: '',
    rentBudget: '',
    alcoholConsumption: false,
    lovesCooking: false,
    smoking: false,
    lookingForRoommate: false,
    hasHall: false,
    maxPeople: '',
    numRooms: ''
  };

  constructor(  private router: Router,
    public activeModal: NgbActiveModal, private preferencesService: RoommatePreferencesService) {}

  onSubmit() {
    console.log('Submitting preferences:', this.preferences);
    // Include user ID in preferences
    this.preferences.userId = this.userId;

    this.preferencesService.createRoommatePreferences(this.preferences).subscribe(
      response => {
        console.log('Roommate preferences created successfully!', response);
        this.activeModal.close('success');
        // window.location.reload();


        setTimeout(() => {
          window.location.reload();
        }, 3000); // 1000 milliseconds = 1 second




      },
      error => {
        console.error('Error creating roommate preferences', error);
      }
    );


   
  }
}
