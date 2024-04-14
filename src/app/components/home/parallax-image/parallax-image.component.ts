import { Component } from '@angular/core';
import { blogData } from '../../../shared/data/footer';

@Component({
  selector: 'app-parallax-image',
  templateUrl: './parallax-image.component.html',
  styleUrls: ['./parallax-image.component.scss'],
})
export class ParallaxImageComponent {

  public headerLogo = 'assets/images/logo/7.png';
  public darkHeaderLogo = 'assets/images/logo/8.png';
  public footerLogo = 'assets/images/logo/8.png';
  public footerClass = 'footer-dark';
  public heartIcon = false;
  public blogData = blogData;

  public theme_default10 = '#00968a';

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-default',this.theme_default10);
    document.documentElement.style.setProperty('--theme-default10',this.theme_default10);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default10');
  }
}


