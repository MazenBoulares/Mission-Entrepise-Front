import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentRoutingModule } from './agent-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AgencyModule } from '../pages/agency/agency.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { AgentProfileDetailsComponent } from './widgets/agent-profile-details/agent-profile-details.component';
import { AgentGridComponent } from './agent-grid/agent-grid.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { SubmitPropertyComponent } from './submit-property/submit-property.component';
import { AddPropertyStepsComponent } from './widgets/add-property-steps/add-property-steps.component';
import { PropertyGeneralDetailsComponent } from './widgets/property-general-details/property-general-details.component';
import { PropertyAddressDetailsComponent } from './widgets/property-address-details/property-address-details.component';
import { PropertyGalleryComponent } from './widgets/property-gallery/property-gallery.component';
import { PropertyConfirmationComponent } from './widgets/property-confirmation/property-confirmation.component';


@NgModule({
  declarations: [
    AgentProfileComponent,
    AgentProfileDetailsComponent,
    AgentGridComponent,
    AgentListComponent,
    SubmitPropertyComponent,
    AddPropertyStepsComponent,
    PropertyGeneralDetailsComponent,
    PropertyAddressDetailsComponent,
    PropertyGalleryComponent,
    PropertyConfirmationComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    SharedModule,
    AgencyModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ]
})
export class AgentModule { }
