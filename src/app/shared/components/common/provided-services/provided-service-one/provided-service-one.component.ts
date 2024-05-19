import { Component, Input } from '@angular/core';
import { providedServices } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-provided-service-one',
  templateUrl: './provided-service-one.component.html',
  styleUrls: ['./provided-service-one.component.scss']
})
export class ProvidedServiceOneComponent {

  @Input() providedServices: providedServices;
  @Input() tagClass: string;

}
