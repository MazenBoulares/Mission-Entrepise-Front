import { Component, Input } from '@angular/core';
import { brand } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-brand-one',
  templateUrl: './brand-one.component.html',
  styleUrls: ['./brand-one.component.scss']
})
export class BrandOneComponent {

  @Input() brandData: brand[] ;

  public Options = {
    loop: true,
    nav: false,
    dots:false,
    responsive: {
      0: {
        items: 2,
      },
      457:{
        items: 3
      },
      668 : {
        items : 4
      },
      999 : {
        items : 5
      }
    }
  }
}
