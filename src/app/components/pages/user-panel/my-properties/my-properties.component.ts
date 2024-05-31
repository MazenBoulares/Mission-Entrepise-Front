import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.scss']
})
export class MyPropertiesComponent implements OnInit {

  properties: any;
  filteredProperties: any;
  currentPage: number = 1;
  itemsPerPage: number = 5;

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Dashboard';
  public parent = 'Home';
  public child = 'My properties';
  public propertyTypeFilter: string = '';

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    let userId = localStorage.getItem('userId');
    console.log("me", userId);
    if (userId) {
      this.propertyService.getPropertyByIdUser(+userId).subscribe({
        next: (response: any) => {
          this.properties = response;
          this.applyFilter();
        },
        error: (error: any) => {
          console.log("thelket", error);
        }
      });
    } else {
      console.log("No user ID found in local storage");
    }
  }

  applyFilter() {
    if (this.propertyTypeFilter) {
      this.filteredProperties = this.properties.filter((property: any) => property.propertyType === this.propertyTypeFilter);
    } else {
      this.filteredProperties = this.properties;
    }
  }

  onFilterChange() {
    this.applyFilter();
    this.currentPage = 1;
  }
}
