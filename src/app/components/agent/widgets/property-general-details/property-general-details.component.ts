import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  agency,
  baths,
  beds,
  category,
  propertyStatus,
  propertyType,
  rooms,
  location,
} from '../../../../shared/data/advance-filter';
import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-property-general-details',
  templateUrl: './property-general-details.component.html',
  styleUrls: ['./property-general-details.component.scss'],
})
export class PropertyGeneralDetailsComponent {

  @Output() activeSteps = new EventEmitter<number>();

  public activeStep: number = 1;
  public validate: boolean = false;

  public propertyStatus = propertyStatus;
  public property_type = propertyType;
  public location = location;
  public rooms = rooms;
  public beds = beds;
  public baths = baths;
  public agencys = agency;
  public category = category;

  constructor(
    private formDataService: FormDataService
  ) { }


  public myForm = new FormGroup({
    propertyType: new FormControl('', Validators.required),
    yearOfConstruction: new FormControl('', Validators.required),
    propertyGarage: new FormControl('', Validators.required),
    propertyBedrooms: new FormControl('', Validators.required),
    propertyBathrooms: new FormControl('', Validators.required),
    propertySurface: new FormControl('', Validators.required),
    propertyBalcony: new FormControl('', Validators.required),
    propertyDescription: new FormControl('', Validators.required),
  });
  
  next(myForm: FormGroup) {
    if (this.myForm.invalid) {
      this.validate = true;
    } else {
      const number = this.activeStep + 1;
      this.formDataService.registerFormGroup('generalDetails', this.myForm);
      this.activeSteps.emit(number);
    }
  }

  get propertyType() {
    return this.myForm.get('propertyType');
  }

  get propertyBalcony() {
    return this.myForm.get('propertyBalcony');
  }

  get propertyGarage() {
    return this.myForm.get('propertyGarage');
  }

  get propertyBedrooms() {
    return this.myForm.get('propertyBedrooms');
  }

  get propertyBathrooms() {
    return this.myForm.get('propertyBathrooms');
  }

  get propertySurface() {
    return this.myForm.get('propertySurface');
  }

  get yearOfConstruction() {
    return this.myForm.get('yearOfConstruction');
  }

  get propertyDescription() {
    return this.myForm.get('propertyDescription');
  }
}
