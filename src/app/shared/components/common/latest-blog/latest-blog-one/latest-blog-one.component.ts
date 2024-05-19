import { Component, Input } from '@angular/core';
import { latestBlog } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-latest-blog-one',
  templateUrl: './latest-blog-one.component.html',
  styleUrls: ['./latest-blog-one.component.scss'],
})
export class LatestBlogOneComponent {

  @Input() latestBlogData: latestBlog[] = [];
  @Input() tagClass: string;

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      1240: {
        items : 3
      }
    },
  };
}
