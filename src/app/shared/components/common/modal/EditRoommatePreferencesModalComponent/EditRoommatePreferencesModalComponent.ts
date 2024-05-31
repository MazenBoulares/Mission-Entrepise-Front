import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoommatePreferencesService } from 'src/app/services/RoommatePreferencesService.service';
import { Router } from '@angular/router';
@Component({
  selector: 'EditRoommatePreferencesModalComponent',
  templateUrl: './EditRoommatePreferencesModalComponent.html',
  styleUrls: ['./EditRoommatePreferencesModalComponent.scss']
})
export class EditRoommatePreferencesModalComponent implements OnInit {
  @Input() preferenceId: number;
  preferenceData: any = {};

  constructor(
    private router: Router,
    public modal: NgbModal, private roommatePreferencesService: RoommatePreferencesService) {}

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

        setTimeout(() => {
          window.location.reload();
        }, 3000); // 1000 milliseconds = 1 second

      },
      (error) => {
        console.error('Error updating preferences:', error);
      }
    );


 
  }
  
}
