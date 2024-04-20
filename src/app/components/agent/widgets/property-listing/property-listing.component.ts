import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { listingType, propertyStatus, propertyType } from 'src/app/shared/data/advance-filter';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrl: './property-listing.component.scss'
})
export class PropertyListingComponent {
  @Output() activeSteps = new EventEmitter<number>();

  public activeStep: number = 5;
  public validate: boolean = false;

  public listing_type = listingType;
  public location = location;



  public myForm = new FormGroup({
    listingType: new FormControl('', Validators.required),
    listingTitle: new FormControl('', Validators.required),
    listingDescription: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });
  logForm() {
    console.log(this.myForm.value);
  }
  next(myForm: FormGroup) {
    if (this.myForm.invalid) {
      this.validate = true;
    } else {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get listingType() {
    return this.myForm.get('listingType');
  }

  get listingDescription() {
    return this.myForm.get('listingDescription');
  }


  get listingTitle() {
    return this.myForm.get('listingTitle');
  }
  get price() {
    return this.myForm.get('price');
  }


}
