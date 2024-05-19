import { Component, Input } from '@angular/core';
import { providedServices } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-provided-service-two',
  templateUrl: './provided-service-two.component.html',
  styleUrls: ['./provided-service-two.component.scss'],
})
export class ProvidedServiceTwoComponent {

  @Input() providedServices: providedServices;
  
}
