import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'EditRoommatePreferencesModalComponent',
  templateUrl: './EditRoommatePreferencesModalComponent.html',
  styleUrls: ['./EditRoommatePreferencesModalComponent.scss']
})
export class EditRoommatePreferencesModalComponent {

  constructor(public modal: NgbModal){}
  
}
