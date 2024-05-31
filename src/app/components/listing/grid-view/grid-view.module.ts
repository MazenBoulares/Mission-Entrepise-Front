import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { GridViewRoutingModule } from './grid-view-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { Grid2LeftSidebarComponent } from './2-grid/grid2-left-sidebar/grid2-left-sidebar.component';
import { Grid2RightSidebarComponent } from './2-grid/grid2-right-sidebar/grid2-right-sidebar.component';
import { Grid2NoSidebarComponent } from './2-grid/grid2-no-sidebar/grid2-no-sidebar.component';
import { Grid3LeftSidebarComponent } from './3-grid/grid3-left-sidebar/grid3-left-sidebar.component';
import { Grid3RightSidebarComponent } from './3-grid/grid3-right-sidebar/grid3-right-sidebar.component';
import { Grid3NoSidebarComponent } from './3-grid/grid3-no-sidebar/grid3-no-sidebar.component';
import { SliderComponent } from './slider/slider.component';
import { GoogleMapComponent } from './map/google-map/google-map.component';
import { LeafletMapComponent } from './map/leaflet-map/leaflet-map.component';
import { LeafletMapModalComponent } from './map-modal/leaflet-map-modal/leaflet-map-modal.component';
import { GoogleMapModalComponent } from './map-modal/google-map-modal/google-map-modal.component';
import { LeftSideGoogleMapComponent } from './left-side-map/left-side-google-map/left-side-google-map.component';
import { LeftSideLeafletMapComponent } from './left-side-map/left-side-leaflet-map/left-side-leaflet-map.component';
import { OnClickGoogleMapComponent } from './on-click-map/on-click-google-map/on-click-google-map.component';
import { OnClickLeafletMapComponent } from './on-click-map/on-click-leaflet-map/on-click-leaflet-map.component';
import { MapHeaderGoogleMapComponent } from './map-header/map-header-google-map/map-header-google-map.component';
import { MapHeaderLeafletMapComponent } from './map-header/map-header-leaflet-map/map-header-leaflet-map.component';

@NgModule({
  declarations: [
    Grid2LeftSidebarComponent,
    Grid2RightSidebarComponent,
    Grid2NoSidebarComponent,
    Grid3LeftSidebarComponent,
    Grid3RightSidebarComponent,
    Grid3NoSidebarComponent,
    SliderComponent,
    GoogleMapComponent,
    LeafletMapComponent,
    LeafletMapModalComponent,
    GoogleMapModalComponent,
    LeftSideGoogleMapComponent,
    LeftSideLeafletMapComponent,
    OnClickGoogleMapComponent,
    OnClickLeafletMapComponent,
    MapHeaderGoogleMapComponent,
    MapHeaderLeafletMapComponent,
  ],
  imports: [
    CommonModule,
    GridViewRoutingModule,
    SharedModule,
    GoogleMapsModule,
    LeafletModule
  ],

  exports: [
    Grid2RightSidebarComponent
  ]
})
export class GridViewModule { }
