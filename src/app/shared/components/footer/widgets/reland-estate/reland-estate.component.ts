import { Component } from '@angular/core';
import { relandEstateFooterData } from '../../../../data/footer';

@Component({
  selector: 'app-reland-estate',
  templateUrl: './reland-estate.component.html',
  styleUrls: ['./reland-estate.component.scss'],
})
export class RelandEstateComponent {

  public relandEstateFooterData = relandEstateFooterData;
  public isRelandData: boolean = false;

  openReland() {
    this.isRelandData = !this.isRelandData;
  }
}
