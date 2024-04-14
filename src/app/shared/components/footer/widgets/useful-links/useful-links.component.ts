import { Component } from '@angular/core';
import { usefulLinkFooterData } from '../../../../data/footer';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss'],
})
export class UsefulLinksComponent {

  public usefulLinkFooterData = usefulLinkFooterData;
  public isLinkData: boolean = false;

  openLink() {
    this.isLinkData = !this.isLinkData;
  }
}
