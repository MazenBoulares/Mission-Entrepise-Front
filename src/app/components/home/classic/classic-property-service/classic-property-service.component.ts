import { Component } from '@angular/core';
import { providedServices } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-classic-property-service',
  templateUrl: './classic-property-service.component.html',
  styleUrls: ['./classic-property-service.component.scss'],
})
export class ClassicPropertyServiceComponent {

  public desc = 'Residences can be classified into different type of housing tenure can used for same physical type.';
  public title = 'classic';

  public providedServices: providedServices[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.providesServices().subscribe((response) => {
      this.providedServices = response.services.filter(
        (item) => item.type == this.title
      );
    });
  }
}
