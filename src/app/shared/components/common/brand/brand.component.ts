import { Component, Input } from '@angular/core';
import { brand } from '../../../../shared/interface/property';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {

  @Input() brandData: brand[];
  @Input() type: string = '';

}
