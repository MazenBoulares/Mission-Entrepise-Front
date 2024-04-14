import { Component } from '@angular/core';
import { blogData } from '../../../shared/data/footer';

@Component({
  selector: 'app-typed-image',
  templateUrl: './typed-image.component.html',
  styleUrls: ['./typed-image.component.scss'],
})
export class TypedImageComponent {

  public headerClass: string = 'header-1 header-9 inner-page light-header shadow-cls';
  public headerLogo: string = 'assets/images/logo/10.png';
  public darkThemeLogo: string = 'assets/images/logo/1.png';
  public title: string = 'typed_image';
  public footerClass = 'footer-brown';

  public theme_default = '#6432b8';
  public theme_default2 = '#9516d7';

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-default',this.theme_default);
    document.documentElement.style.setProperty('--theme-default2',this.theme_default2);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default2');
  }
}
