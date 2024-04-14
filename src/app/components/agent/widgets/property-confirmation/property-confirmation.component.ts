import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-confirmation',
  templateUrl: './property-confirmation.component.html',
  styleUrls: ['./property-confirmation.component.scss']
})
export class PropertyConfirmationComponent {


  submit(){
    window.location.reload();
  }
}
