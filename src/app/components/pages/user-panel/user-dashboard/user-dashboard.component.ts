import { Component } from '@angular/core';
import { totalAgents, totalListing, totalProperty, totalSales } from '../../../../shared/data/dashboard-charts';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Dashboard';
  public parent = 'Home';
  public child = 'Dashboard';

  public totalAgents = totalAgents;
  public totalSales = totalSales;
  public totalProperty = totalProperty;
  public totalListing = totalListing;

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';


  constructor(private statsService:StatsService) {

  }
  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);
    this.statsService.getListingByLanlordId(1).subscribe({
      next:(data)=>this.totalListing.number=data
    })
    this.statsService.getPropertyByLanlordId(1).subscribe({
      next:(data)=>this.totalProperty.number=data
    })
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
