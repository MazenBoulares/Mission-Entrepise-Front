import { Component, Input } from '@angular/core';
import { currency, featuredProperty } from '../../../../shared/interface/property';

@Component({
  selector: 'app-featured-property',
  templateUrl: './featured-property.component.html',
  styleUrls: ['./featured-property.component.scss'],
})
export class FeaturedPropertyComponent {

  @Input() featuredProperty: featuredProperty[];
  @Input() type: string = '';
  @Input() tagClass: string = '';

}
