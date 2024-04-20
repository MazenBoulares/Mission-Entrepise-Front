import { Component } from '@angular/core';
import { blogDetails, comments } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-blog-details-left-sidebar',
  templateUrl: './blog-details-left-sidebar.component.html',
  styleUrls: ['./blog-details-left-sidebar.component.scss'],
})
export class BlogDetailsLeftSidebarComponent {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Blog';
  public parent = 'Home';
  public child = 'Blog';

  public blogDetails: blogDetails[];
  public commentsData: comments[];

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.blogDetailsData().subscribe((response) => {
      this.blogDetails = response.blogDetails;
      this.commentsData = response.commentsData
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
