import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartistModule } from 'ng-chartist';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../shared/shared.module';
import { UserPanelRoutingModule } from './user-panel-routing.module';

import { AddressComponent } from './create-property/address/address.component';
import { BasicInformationComponent } from './create-property/basic-information/basic-information.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { PropertyGalleryComponent } from './create-property/property-gallery/property-gallery.component';
import { MyListingComponent } from './my-listing/my-listing.component';
import { MyPropertiesComponent} from "./my-properties/my-properties.component";
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserDetailsComponent } from './my-profile/user-details/user-details.component';
import { AvailablePropertyComponent } from './user-dashboard/available-property/available-property.component';
import { PropertyOverviewComponent } from './user-dashboard/property-overview/property-overview.component';
import { SalesByAgentsComponent } from './user-dashboard/sales-by-agents/sales-by-agents.component';
import { SalesOverviewComponent } from './user-dashboard/sales-overview/sales-overview.component';
import { TopCommonChartsComponent } from './user-dashboard/top-common-charts/top-common-charts.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserInfoComponent } from './widgets/user-info/user-info.component';
import { UserPanelSideMenuComponent } from './widgets/user-panel-side-menu/user-panel-side-menu.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { CardsPaymentComponent } from './cards-payment/cards-payment.component';
import { CardsDetailsComponent } from './cards-payment/cards-details/cards-details.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ComparePropertyComponent } from './compare-property/compare-property.component';
import { ComparePropertyDataComponent } from './compare-property/compare-property-data/compare-property-data.component';
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserInfoComponent,
    UserPanelSideMenuComponent,
    MyListingComponent,
    MyPropertiesComponent,
    TopCommonChartsComponent,
    SalesOverviewComponent,
    SalesByAgentsComponent,
    AvailablePropertyComponent,
    PropertyOverviewComponent,
    CreatePropertyComponent,
    BasicInformationComponent,
    AddressComponent,
    PropertyGalleryComponent,
    MyProfileComponent,
    UserDetailsComponent,
    FavouritesComponent,
    CardsPaymentComponent,
    CardsDetailsComponent,
    PrivacyComponent,
    ComparePropertyComponent,
    ComparePropertyDataComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    UserPanelRoutingModule,
    SharedModule,
    ChartistModule,
    NgApexchartsModule,
    NgxDropzoneModule,
    FormsModule
  ]
})
export class UserPanelModule { }
