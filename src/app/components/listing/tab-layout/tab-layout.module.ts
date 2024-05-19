import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { TabLayoutRoutingModule } from './tab-layout-routing.module';
import { TabFullWidthComponent } from './tab-full-width/tab-full-width.component';
import { TabLeftSidebarComponent } from './tab-left-sidebar/tab-left-sidebar.component';
import { TabRightSidebarComponent } from './tab-right-sidebar/tab-right-sidebar.component';
import { CommonTabPropertyBoxComponent } from './widgets/common-tab-property-box/common-tab-property-box.component';


@NgModule({
  declarations: [
    TabFullWidthComponent,
    TabLeftSidebarComponent,
    TabRightSidebarComponent,
    CommonTabPropertyBoxComponent
  ],
  imports: [
    CommonModule,
    TabLayoutRoutingModule,
    SharedModule
  ]
})
export class TabLayoutModule { }
