import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-filter-search',
  templateUrl: './slider-filter-search.component.html',
  styleUrls: ['./slider-filter-search.component.scss'],
})
export class SliderFilterSearchComponent {
  public themeLogo = 'assets/images/logo/6.png';
  public title = 'slider_filter_search';
  public footerClass = 'footer-brown';
  public headerClass = 'header-1 header-6';

  public theme_default8 = '#2c2e97';
  public theme_default9 = '#4b55c4';

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-default',this.theme_default8);
    document.documentElement.style.setProperty('--theme-default8',this.theme_default8);
    document.documentElement.style.setProperty('--theme-default9',this.theme_default9);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default8');
    document.documentElement.style.removeProperty('--theme-default9');
  }
}
