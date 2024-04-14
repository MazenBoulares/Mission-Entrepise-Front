import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grid2LeftSidebarComponent } from '../../listing/grid-view/2-grid/grid2-left-sidebar/grid2-left-sidebar.component';
import { ImageWithEffectComponent } from './image-with-effect/image-with-effect.component';
import { BreadcrumbRightComponent } from './breadcrumb-right/breadcrumb-right.component';
import { StickyTabComponent } from '../../property/sticky-tab/sticky-tab.component';
import { ListViewLeafletMapComponent } from '../../listing/list-view/map/list-view-leaflet-map/list-view-leaflet-map.component';
import { ListViewGoogleMapComponent } from '../../listing/list-view/map/list-view-google-map/list-view-google-map.component';

const routes: Routes = [
  {
    path: 'basic',
    component: Grid2LeftSidebarComponent,
  },
  {
    path: 'image-with-effect',
    component: ImageWithEffectComponent,
  },
  {
    path: 'right-content',
    component: BreadcrumbRightComponent,
  },
  {
    path: 'only-image',
    component: StickyTabComponent,
  },
  {
    path: 'small',
    component: ListViewLeafletMapComponent,
  },
  {
    path: 'gradient',
    component: ListViewGoogleMapComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementBreadcrumbRoutingModule { }
