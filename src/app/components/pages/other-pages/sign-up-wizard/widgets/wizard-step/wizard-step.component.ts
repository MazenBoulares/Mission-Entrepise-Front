import { Component, Input } from '@angular/core';
import { steps } from '../../../../../../shared/data/sign-up-wizard';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss'],
})
export class WizardStepComponent {

  @Input() stepsData: steps[];
  @Input() activeSteps: number;

  ngOnChanges(){
    this.stepsData.forEach((data) => {
      if(data.stepNumber < this.activeSteps){
        data.disabled = true;
      }else{
        data.disabled = false
      }
    })
  }

}
