import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss'],
})
export class HomeDetailsComponent {

  @Input() propertyDetails: latestForRent

  constructor(public propertyService: PropertyService){}

  print(){
    window.print()
  }
}
