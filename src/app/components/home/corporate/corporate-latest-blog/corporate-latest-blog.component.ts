import { Component, Input } from '@angular/core';
import { latestBlog } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-corporate-latest-blog',
  templateUrl: './corporate-latest-blog.component.html',
  styleUrls: ['./corporate-latest-blog.component.scss']
})
export class CorporateLatestBlogComponent {

  @Input() tagClass: string;
  @Input() svgClass: boolean;

  public title = 'corporate';
  public desc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';

  public latestBlogData : latestBlog[] = [];

  constructor(private propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.latestBlogData().subscribe(response => {
      this.latestBlogData = response.latestBlog.filter(item => item.type == this.title)
  });

}
}
