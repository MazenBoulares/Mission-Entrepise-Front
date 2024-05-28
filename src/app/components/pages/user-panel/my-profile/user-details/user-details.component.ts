import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoommatePreferencesService } from 'src/app/services/RoommatePreferencesService.service';
import { EditRoommatePreferencesModalComponent } from 'src/app/shared/components/common/modal/EditRoommatePreferencesModalComponent/EditRoommatePreferencesModalComponent';
import { CreateRoommatePreferencesModalComponent } from 'src/app/shared/components/common/modal/CreateRoommatePreferencesModalComponent/CreateRoommatePreferencesModalComponent';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  roommatePreferences: any = null;
  userId: number = 1; // Example user ID, replace with actual user logic
  preferenceId: number = 4;

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

  closestRoommates: number[] = [];

  constructor(private modal: NgbModal, private roommatePreferencesService: RoommatePreferencesService) { }

  ngOnInit(): void {
    this.fetchPreferences(this.preferenceId);
  }

  fetchPreferences(Id: number) {
    this.roommatePreferencesService.getRoommatePreferenceById(Id).subscribe(
      (data) => {
        console.log(data);
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
    this.modal.open(CreateRoommatePreferencesModalComponent, { size: 'lg', centered: true });
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

console.log(this.roommatePreferences);
console.log(this.userPreferencesModel);





    this.roommatePreferencesService.suggestPreferences(this.userPreferencesModel)
      .subscribe(
        (closestRoommates: number[]) => {
          this.closestRoommates = closestRoommates;
          console.log('Closest roommates:', closestRoommates);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }


}

