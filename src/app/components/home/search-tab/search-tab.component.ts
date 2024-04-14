import { Component } from '@angular/core';
import { latestForRent } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss'],
})
export class SearchTabComponent {

  public themeLogo = 'assets/images/logo/4.png';
  public darkThemeLogo = 'assets/images/logo/9.png';
  public title = 'search_tab';

  public theme_default6 = '#f35d43';
  public theme_default7 =  '#f34451';

  public latestPropertyData: latestForRent[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default',this.theme_default6);
    document.documentElement.style.setProperty('--theme-default6',this.theme_default6);
    document.documentElement.style.setProperty('--theme-default7',this.theme_default7);

    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestPropertyData = response.latestForRent.filter((item) =>
        item.type.includes(this.title)
      );
    });
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-default6');
    document.documentElement.style.removeProperty('--theme-default6');
    document.documentElement.style.removeProperty('--theme-default7');
  }
}
