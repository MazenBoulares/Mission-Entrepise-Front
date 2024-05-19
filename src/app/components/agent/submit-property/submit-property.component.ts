import { Component, ViewChild } from '@angular/core';
import { addPropertyStepsData } from '../../../shared/data/add-property';
import { PropertyGeneralDetailsComponent } from '../widgets/property-general-details/property-general-details.component';

import { LocalStorageService } from 'src/app/services/localStorageService/local-storage.service';
import { UserService } from 'src/app/services/userService';



@Component({
  selector: 'app-submit-property',
  templateUrl: './submit-property.component.html',
  styleUrls: ['./submit-property.component.scss'],
})
export class SubmitPropertyComponent {



  constructor(private userService: UserService, private localStorageService:LocalStorageService) {
  }





  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Add Property';
  public parent = 'Home';
  public child = 'Add Property';
  public test = 'test';

  public addPropertyStepsData = addPropertyStepsData;
  public activeSteps: number;


  // public dataPropertyGeneralDeltails:any;
  // public dataPropertyAddressDeltails:any;
  // public dataPropertyLocationDeltails:any;

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  currentUser: any;

  ngOnInit() {


  // ***** auth (will be trasnfered to HOME later) *****
    const userData = this.localStorageService.getUserDataFromLocalStorage();
    if (userData) {
      this.userService.currentUser = JSON.parse(userData);
    } else {
      console.error('User data not found in local storage');
    }
// ***** /auth (will be trasnfered to HOME later) *****



    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);
    const data = addPropertyStepsData.filter((data) => {
      return data.stepNumber === 1;
    });
    this.activeSteps = data[0].stepNumber;
  }
  
  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
 
  public receiveChildData(step: number) {
    this.activeSteps = step;
    // if (step === 4) {
    //   // For step 4, transition to step 5
    //   this.activeSteps = 5;
    // } else {
    //   this.activeSteps = step;
    // }
  }
  // handleDataPropertyGeneralDeltailsEvent(data: any) {
  //   this.dataPropertyGeneralDeltails = data;
  // }
  // handleDataPropertyAddressDeltailsEvent(data: any) {
  //   this.dataPropertyAddressDeltails = data;
  // }
  // handleDataPropertyLocationDeltailsEvent(data: any) {
  //   this.dataPropertyLocationDeltails = data;
  // }

}
