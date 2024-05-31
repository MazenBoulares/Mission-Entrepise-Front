import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-classic-latest-property',
  templateUrl: './classic-latest-property.component.html',
  styleUrls: ['./classic-latest-property.component.scss'],
})
export class ClassicLatestPropertyComponent {

  @Input() latestPropertyData: latestForRent[];

  public desc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
  public title = 'classic';

  constructor(public propertyService: PropertyService){}

}
