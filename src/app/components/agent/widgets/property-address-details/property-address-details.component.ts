import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  location,city
} from '../../../../shared/data/advance-filter';
import { FormDataService } from 'src/app/services/form-data.service';


@Component({
  selector: 'app-property-address-details',
  templateUrl: './property-address-details.component.html',
  styleUrls: ['./property-address-details.component.scss'],
})
export class PropertyAddressDetailsComponent {

  @Output() activeSteps = new EventEmitter<number>();
  public activeStep: number = 2;
  public validate: boolean = false;
  public location = location;
  public cities = city;
  public markerCoordinates: { latitude: number, longitude: number } = { latitude: 200, longitude: 200 }; // Initialize marker coordinates

  constructor(
    private formDataService: FormDataService
  ) { }
  public myForm = new FormGroup({
    addressStreet: new FormControl('', Validators.required),
    addressZipCode: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{6}$'),
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
    addressCountry: new FormControl('', Validators.required),
    addressCity: new FormControl('', Validators.required),
    addressState: new FormControl('', Validators.required),
    latitude: new FormControl(200),
    longitude: new FormControl(200)
  });

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
  next(myForm: FormGroup) {
   if (this.myForm.invalid) {
     console.log(this.markerCoordinates)
     this.validate = true;
   }
   else {
      this.myForm.get("latitude")?.setValue(this.markerCoordinates.latitude)
      this.myForm.get("longitude")?.setValue(this.markerCoordinates.longitude)
      const number = this.activeStep + 1;
      this.formDataService.registerFormGroup('addressDetails', this.myForm);
      this.activeSteps.emit(number);
   }
  }

  get addressStreet() {
    return this.myForm.get('addressStreet');
  }

  get addressZipCode() {
    return this.myForm.get('addressZipCode');
  }

  get addressCountry() {
    return this.myForm.get('addressCountry');
  }

  get addressCity() {
    return this.myForm.get('addressCity');
  }

  get addressState() {
    return this.myForm.get('addressState');
  }
  handleMarkerCoordinates(coordinates: { latitude: number, longitude: number }) {
    this.markerCoordinates = coordinates;
  }

}
