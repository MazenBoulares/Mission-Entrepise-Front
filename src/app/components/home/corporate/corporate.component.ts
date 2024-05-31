import { Component, Input } from '@angular/core';
import { blogData } from '../../../shared/data/footer';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss'],
})
export class CorporateComponent {

  @Input() darkFooterLogo: string = 'assets/images/logo/3.png';

  public headerLogo = 'assets/images/logo/5.png';
  public darkHeaderLogo = 'assets/images/logo/11.png'
  public footerLogo = 'assets/images/logo/3.png';
  public footerClass = 'footer-dark';
  public subFooterClass = 'sub-footer-dark';
  public heartIcon = false;
  public blogData = blogData;

  public theme_default5 = '#5eac12';
  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-default',this.theme_default5);
    document.documentElement.style.setProperty('--theme-default5',this.theme_default5);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default5');
  }
}
