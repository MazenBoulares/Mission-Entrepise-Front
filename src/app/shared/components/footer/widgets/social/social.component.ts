import { Component } from '@angular/core';
import { socialFooterData } from '../../../../data/footer';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {

  public socialFooterData = socialFooterData;
  public isSocialData: boolean = false;

  openSocial() {
    this.isSocialData = !this.isSocialData;
  }
}
