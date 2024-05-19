import { Component } from '@angular/core';
import { sellFooterData } from '../../../../data/footer';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent {

  public sellFooterData = sellFooterData;
  public isSellData: boolean = false;

  openSell() {
    this.isSellData = !this.isSellData;
  }
}
