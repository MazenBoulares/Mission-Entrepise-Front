import { Component, Input } from '@angular/core';
import { banner } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-banner-two',
  templateUrl: './banner-two.component.html',
  styleUrls: ['./banner-two.component.scss']
})
export class BannerTwoComponent {

  @Input() bannerData: banner;
  @Input() tagClass: string;

}
