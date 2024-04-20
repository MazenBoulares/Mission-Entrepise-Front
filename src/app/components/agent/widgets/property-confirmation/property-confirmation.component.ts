import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-confirmation',
  templateUrl: './property-confirmation.component.html',
  styleUrls: ['./property-confirmation.component.scss']
})
export class PropertyConfirmationComponent {
  @Output() activeSteps = new EventEmitter<number>();
  public activeStep: number = 4;

  submit(){
    window.location.reload();
  }
  next() {  
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
  }
}
