import { Component } from '@angular/core';

@Component({
  selector: 'app-property-listing-confirmation',
  templateUrl: './property-listing-confirmation.component.html',
  styleUrl: './property-listing-confirmation.component.scss'
})
export class PropertyListingConfirmationComponent {
  submit(){
    window.location.reload();
  }
}
