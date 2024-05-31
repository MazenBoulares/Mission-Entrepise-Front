import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-enterprise-looking-for',
  templateUrl: './enterprise-looking-for.component.html',
  styleUrls: ['./enterprise-looking-for.component.scss'],
})
export class EnterpriseLookingForComponent {

  @Input() latestForRentData: latestForRent[];
  @Input() title: string = '';
  @Input() tagClass: string = '';

  public desc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';
  public active = 1;
  public openTab: string = 'family_house';

  public lookingForData: latestForRent[];

  constructor(public propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.lookingForData = response.latestForRent.filter(
        (item) => item.type.includes(this.title) && item.propertyType === this.openTab);
    });
  }

  public tabbed(val: string) {
    this.openTab = val;

    this.lookingForData = this.latestForRentData.filter((data) => {
      return data.propertyType === val;
    });
  }
}
