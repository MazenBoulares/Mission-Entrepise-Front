import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUs1Component } from './contact-us1/contact-us1.component';
import { ContactUs2Component } from './contact-us2/contact-us2.component';
import { ContactUs3Component } from './contact-us3/contact-us3.component';
import { SharedModule } from '../../shared/shared.module';
import { ContactUsFormComponent } from './widgets/contact-us-form/contact-us-form.component';
import { ContactDetailsComponent } from './widgets/contact-details/contact-details.component';
import { DownloadAppComponent } from './widgets/download-app/download-app.component';


@NgModule({
  declarations: [
    ContactUs1Component,
    ContactUs2Component,
    ContactUs3Component,
    ContactUsFormComponent,
    ContactDetailsComponent,
    DownloadAppComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
