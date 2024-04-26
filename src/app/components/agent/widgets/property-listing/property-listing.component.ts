import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { listingType, propertyStatus, propertyType } from 'src/app/shared/data/advance-filter';
import {FormDataService} from "../../../../services/form-data.service";
import {ListingService} from "../../../../services/listing.service";

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
  constructor(private  formDataService :FormDataService, private listingService:ListingService) {
  }


  public myForm = new FormGroup({
    listingType: new FormControl('', Validators.required),
    listingTitle: new FormControl('', Validators.required),
    listingDescription: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  public propertyId : number;
  public isLoading : boolean;
  async  addNewListing(){
    try {
      this.isLoading = true; // Start loading
      this.propertyId = this.formDataService.getIdProperty('idProperty');
      const data = await this.listingService.addNewListing(this.myForm.value,this.propertyId).toPromise();
      console.log('Listing added successfully:', data);
    } catch (error) {
      console.error('Error adding Listing:', error);
      throw error; // Propagate the error to the caller (next() method)
    } finally {
      this.isLoading = false; // Stop loading
    }
  }
  async next(myForm: FormGroup) {
    if (this.myForm.invalid) {
      this.validate = true;
      await this.addNewListing();
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
