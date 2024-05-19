import { Component, Input } from '@angular/core';
import { currency, pricingPlan } from '../../../../../shared/interface/property';
import { PropertyService } from '../../../../../shared/services/property.service';

@Component({
  selector: 'app-pricing-plan-one',
  templateUrl: './pricing-plan-one.component.html',
  styleUrls: ['./pricing-plan-one.component.scss'],
})
export class PricingPlanOneComponent {

  @Input() pricingPlan: pricingPlan[] = [];
  @Input() tagClass: string;
  @Input() currency:currency;

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      1240: {
        items: 3,
      },
    },
  };
  
  constructor(public propertyService: PropertyService) {}

}
