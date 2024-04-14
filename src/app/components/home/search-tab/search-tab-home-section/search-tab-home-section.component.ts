import { Component } from '@angular/core';

@Component({
  selector: 'app-search-tab-home-section',
  templateUrl: './search-tab-home-section.component.html',
  styleUrls: ['./search-tab-home-section.component.scss'],
})
export class SearchTabHomeSectionComponent {

  public active = 1;
  public openTab: string = 'sell';

  public tabbed(val: string) {
    this.openTab = val;
  }
}
