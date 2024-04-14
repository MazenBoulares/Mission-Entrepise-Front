import { Component, Input } from '@angular/core';
import { providedServices } from '../../../../shared/interface/property';

@Component({
  selector: 'app-provided-services',
  templateUrl: './provided-services.component.html',
  styleUrls: ['./provided-services.component.scss'],
})
export class ProvidedServicesComponent {

  @Input() providedServices: providedServices;
  @Input() providedServicesData: providedServices[];
  @Input() type: string = '';
  @Input() tagClass: string;

}
