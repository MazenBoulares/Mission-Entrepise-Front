import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoommatePreferencesService } from 'src/app/services/RoommatePreferencesService.service'; // Update this path as necessary
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-roommate-preferences-modal',
  templateUrl: './CreateRoommatePreferencesModalComponent.html',
  styleUrls: ['./CreateRoommatePreferencesModalComponent.scss']
})
export class CreateRoommatePreferencesModalComponent {
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

  constructor(public modal: NgbModal, private preferencesService: RoommatePreferencesService) {}

  onSubmit() {
    console.log('blablabla');
    this.preferencesService.createRoommatePreferences(this.preferences).subscribe(
      response => {
        console.log('Roommate preferences created successfully!', response);
        this.modal.dismissAll();
      },
      error => {
        console.error('Error creating roommate preferences', error);
      }
    );
  }
}
