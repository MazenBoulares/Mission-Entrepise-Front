import { Component } from '@angular/core';
import { blogDataHorizontal } from 'src/app/shared/data/footer';

@Component({
  selector: 'app-latest-blog-horizontal',
  templateUrl: './latest-blog-horizontal.component.html',
  styleUrl: './latest-blog-horizontal.component.scss'
})
export class LatestBlogHorizontalComponent {

  public blogDataHorizontal = blogDataHorizontal;

  public options = {
    loop: true,
    nav: false,
    dots:false,
    responsive : {
      0 : {
        items : 1
      },
      600 : {
        items : 2
      },
      900 : {
        items : 3
      }
    }
  }
}
