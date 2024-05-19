import { Component, Input } from '@angular/core';
import { latestBlog } from '../../../../shared/interface/property';

@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.scss']
})
export class LatestBlogComponent {

  @Input() latestBlogData: latestBlog[] = [];
  @Input() type: string = '';
  @Input() tagClass: string;

}
