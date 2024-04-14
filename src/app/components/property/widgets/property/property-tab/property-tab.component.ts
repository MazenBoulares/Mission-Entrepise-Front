import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-tab',
  templateUrl: './property-tab.component.html',
  styleUrls: ['./property-tab.component.scss'],
})
export class PropertyTabComponent {

  @Input() propertyData: any;
  @Input() tabData: any;
  @Input() dataArray: string[];
  @Input() propertyDetailsData: any;

  public active = 1;
  public openTab: string = 'about';

  public tabbed(val: string) {
    this.openTab = val;
  }
}
