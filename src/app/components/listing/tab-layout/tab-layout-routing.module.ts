import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabFullWidthComponent } from './tab-full-width/tab-full-width.component';
import { TabLeftSidebarComponent } from './tab-left-sidebar/tab-left-sidebar.component';
import { TabRightSidebarComponent } from './tab-right-sidebar/tab-right-sidebar.component';

const routes: Routes = [
  {
    path: 'tab-full-width',
    component: TabFullWidthComponent
  },
  {
    path: 'tab-left-sidebar',
    component: TabLeftSidebarComponent
  },
  {
    path: 'tab-right-sidebar',
    component: TabRightSidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabLayoutRoutingModule { }
