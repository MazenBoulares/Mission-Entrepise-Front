import { Component, Input } from '@angular/core';
import { banner } from '../../../../../shared/interface/property';
import { PropertyService } from '../../../../../shared/services/property.service';

@Component({
  selector: 'app-banner-one',
  templateUrl: './banner-one.component.html',
  styleUrls: ['./banner-one.component.scss'],
})
export class BannerOneComponent {

  @Input() bannerData: banner;
  @Input() tagClass: string = '';
  @Input() buttonClass: string;
  
}
