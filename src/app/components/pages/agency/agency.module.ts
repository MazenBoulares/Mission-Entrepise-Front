import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyProfileComponent } from './agency-profile/agency-profile.component';
import { AboutAgencyComponent } from './widgets/about-agency/about-agency.component';
import { AgencyAgentsComponent } from './widgets/agency-agents/agency-agents.component';
import { AgencyGridComponent } from './agency-grid/agency-grid.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { CommonAgencyComponent } from './widgets/common-agency/common-agency.component';


@NgModule({
  declarations: [
    AgencyProfileComponent,
    AboutAgencyComponent,
    AgencyAgentsComponent,
    AgencyGridComponent,
    AgencyListComponent,
    CommonAgencyComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    SharedModule
  ],
  exports: [
    CommonAgencyComponent
  ]
})
export class AgencyModule { }
