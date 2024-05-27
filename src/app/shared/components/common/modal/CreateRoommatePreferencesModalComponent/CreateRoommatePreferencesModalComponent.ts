import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'CreateRoommatePreferencesModalComponent',
  templateUrl: './CreateRoommatePreferencesModalComponent.html',
  styleUrls: ['./CreateRoommatePreferencesModalComponent.scss']
})
export class CreateRoommatePreferencesModalComponent {

  constructor(public modal: NgbModal){}
  
}
