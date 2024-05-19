import { Component, Input } from '@angular/core';
import { footerAboutData } from '../../../../data/footer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

  @Input() icon: boolean = false;

  public footerAboutData = footerAboutData;
  public isAboutData: boolean = false;

  openAbout() {
    this.isAboutData = !this.isAboutData;
  }
}
