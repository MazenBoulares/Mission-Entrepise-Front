import { Component, Input } from '@angular/core';
import { propertySteps } from '../../../../shared/data/add-property';

@Component({
  selector: 'app-add-property-steps',
  templateUrl: './add-property-steps.component.html',
  styleUrls: ['./add-property-steps.component.scss'],
})
export class AddPropertyStepsComponent {

  @Input() addPropertyStepsData: propertySteps[];
  @Input() activeSteps: number;

  ngOnChanges(){
    this.addPropertyStepsData.forEach((data) => {
      if(data.stepNumber < this.activeSteps){
        data.disabled = true;
      }else{
        data.disabled = false
      }
    })
  }

}
