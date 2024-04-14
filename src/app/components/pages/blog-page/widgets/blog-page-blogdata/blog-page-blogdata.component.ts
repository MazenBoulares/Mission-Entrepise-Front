import { Component, Input } from '@angular/core';
import { latestBlog } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-blog-page-blogdata',
  templateUrl: './blog-page-blogdata.component.html',
  styleUrls: ['./blog-page-blogdata.component.scss'],
})
export class BlogPageBlogdataComponent {

  @Input() latestBlogData: latestBlog;
  @Input() date: boolean = true;
  @Input() type: string = '';
  @Input() masonry: boolean = false;

}
