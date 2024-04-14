import { Component } from '@angular/core';
import { blogData } from '../../../shared/data/footer';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-image-content',
  templateUrl: './image-content.component.html',
  styleUrls: ['./image-content.component.scss'],
})
export class ImageContentComponent {

  public themeLogo = 'assets/images/logo/1.png';
  public headerClass = 'header-1 fixed-header';
  public title = 'image_content';
  public footerClass = 'footer-brown';
  public blogData = blogData;

  public theme_default = '#6432b8';
  public theme_default2 = '#9516d7';

  constructor(private layoutService: LayoutService){
    this.layoutService.headerStyle = 'simple';
    this.layoutService.headerLogo = this.themeLogo;
    this.layoutService.headerClass = this.headerClass;
    this.layoutService.headerFix = true;
  }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-default',this.theme_default);
    document.documentElement.style.setProperty('--theme-default2',this.theme_default2);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default2');
  }
}
