import { Component } from '@angular/core';
import { latestBlog } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-enterprise-latest-blog',
  templateUrl: './enterprise-latest-blog.component.html',
  styleUrls: ['./enterprise-latest-blog.component.scss'],
})
export class EnterpriseLatestBlogComponent {

  public desc = 'See why ProCity is one of the best friends for exploring the city.';
  public title = 'enterprise';

  public latestBlogData: latestBlog[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter((item) => item.type == this.title);
    });
  }
}
