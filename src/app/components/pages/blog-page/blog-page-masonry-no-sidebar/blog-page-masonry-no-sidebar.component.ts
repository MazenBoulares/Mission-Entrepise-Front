import { Component } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { latestBlog } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-blog-page-masonry-no-sidebar',
  templateUrl: './blog-page-masonry-no-sidebar.component.html',
  styleUrls: ['./blog-page-masonry-no-sidebar.component.scss'],
})
export class BlogPageMasonryNoSidebarComponent {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Blog';
  public parent = 'Home';
  public child = 'Blog';

  public latestBlogData: latestBlog[] = [];

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  public masonryOptions: NgxMasonryOptions = {
    gutter: 30,
  };

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter((item) => item.type == 'corporate');
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
