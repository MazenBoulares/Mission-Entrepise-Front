import { Component } from '@angular/core';
import { buyFooterData } from '../../../../data/footer';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
})
export class BuyComponent {

  public buyFooterData = buyFooterData;
  public isBuyData: boolean = false;

  openBuy() {
    this.isBuyData = !this.isBuyData;
  }
}
