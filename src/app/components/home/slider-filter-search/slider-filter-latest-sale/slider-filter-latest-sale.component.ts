import { Component, Input } from '@angular/core';
import { latestForSale } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-slider-filter-latest-sale',
  templateUrl: './slider-filter-latest-sale.component.html',
  styleUrls: ['./slider-filter-latest-sale.component.scss']
})
export class SliderFilterLatestSaleComponent {

  @Input() type: string = 'simple';
  @Input() tagClass: string;
  @Input() titleType: string;

  public title = 'slider_filter_search';
  public tag = "Sale";
  public heading = "Latest For Sale";
  public desc = "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening.";

  public propertyData: latestForSale[] = []

  constructor(public propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.propertyData().subscribe(response => {
      this.propertyData = response.latestForSale.filter(item => item.type == this.title)
  });
}

}
