import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { ListViewRoutingModule } from './list-view-routing.module';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ListViewSliderComponent } from './list-view-slider/list-view-slider.component';
import { ListViewThumbnailImageComponent } from './list-view-thumbnail-image/list-view-thumbnail-image.component';
import { ListViewVideoComponent } from './list-view-video/list-view-video.component';
import { ListingLeftSidebarComponent } from './listing/listing-left-sidebar/listing-left-sidebar.component';
import { ListingNoSidebarComponent } from './listing/listing-no-sidebar/listing-no-sidebar.component';
import { ListingRightSidebarComponent } from './listing/listing-right-sidebar/listing-right-sidebar.component';
import { ListViewGoogleMapComponent } from './map/list-view-google-map/list-view-google-map.component';
import { ListViewLeafletMapComponent } from './map/list-view-leaflet-map/list-view-leaflet-map.component';


@NgModule({
  declarations: [
    ListingLeftSidebarComponent,
    ListingRightSidebarComponent,
    ListingNoSidebarComponent,
    ListViewGoogleMapComponent,
    ListViewLeafletMapComponent,
    ListViewSliderComponent,
    ListViewThumbnailImageComponent,
    ListViewVideoComponent,
  ],
  imports: [
    CommonModule,
    ListViewRoutingModule,
    SharedModule,
    GoogleMapsModule,
    GalleryModule,
    CarouselModule
  ]
})
export class ListViewModule { }
