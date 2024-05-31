import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MyListingComponent } from './my-listing/my-listing.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { CardsPaymentComponent } from './cards-payment/cards-payment.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ComparePropertyComponent } from './compare-property/compare-property.component';
import {MyPropertiesComponent} from "./my-properties/my-properties.component";

const routes: Routes = [
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'my-listing',
    component: MyListingComponent,
  },
  {
    path: 'my-properties',
    component: MyPropertiesComponent,
  },
  {
    path: 'create-property',
    component: CreatePropertyComponent,
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
  },
  {
    path: 'favourite',
    component: FavouritesComponent,
  },
  {
    path: 'compare-property',
    component: ComparePropertyComponent
  },
  {
    path: 'cards-payment',
    component: CardsPaymentComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule { }
