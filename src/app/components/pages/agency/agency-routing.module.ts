import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyProfileComponent } from './agency-profile/agency-profile.component';
import { AgencyGridComponent } from './agency-grid/agency-grid.component';
import { AgencyListComponent } from './agency-list/agency-list.component';

const routes: Routes = [
  {
    path: 'agency-profile',
    component: AgencyProfileComponent,
  },
  {
    path: 'agency-grid',
    component: AgencyGridComponent,
  },
  {
    path: 'agency-list',
    component: AgencyListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
