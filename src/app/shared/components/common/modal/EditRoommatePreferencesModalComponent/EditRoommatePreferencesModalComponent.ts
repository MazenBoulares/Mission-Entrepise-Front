import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoommatePreferencesService } from 'src/app/services/RoommatePreferencesService.service';

@Component({
  selector: 'EditRoommatePreferencesModalComponent',
  templateUrl: './EditRoommatePreferencesModalComponent.html',
  styleUrls: ['./EditRoommatePreferencesModalComponent.scss']
})
export class EditRoommatePreferencesModalComponent implements OnInit {
  @Input() preferenceId: number;
  preferenceData: any = {};

  constructor(public modal: NgbModal, private roommatePreferencesService: RoommatePreferencesService) {}

  ngOnInit() {
    if (this.preferenceId) {
      this.roommatePreferencesService.getRoommatePreferenceById(this.preferenceId).subscribe(
        (data) => {
          console.log(data);
          this.preferenceData = data;
        },
        (error) => {
          console.error('Error fetching preference data:', error);
        }
      );
    }
  }

  saveChanges() {
    this.roommatePreferencesService.updateRoommatePreference(this.preferenceId, this.preferenceData).subscribe(
      (response) => {
        console.log('Preferences updated successfully:', response);
        this.modal.dismissAll();
      },
      (error) => {
        console.error('Error updating preferences:', error);
      }
    );
  }
}
