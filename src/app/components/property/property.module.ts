import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from 'ngx-bar-rating';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../shared/shared.module';
import { PropertyRoutingModule } from './property-routing.module';

import { PropertyImageBoxComponent } from './property-image-box/property-image-box.component';
import { PropertyImageSliderHomeSectionComponent } from './property-image-slider/property-image-slider-home-section/property-image-slider-home-section.component';
import { PropertyImageSliderComponent } from './property-image-slider/property-image-slider.component';
import { PropertyInfoTabComponent } from './property-info-tab/property-info-tab.component';
import { PropertyLeftSidebarComponent } from './property-left-sidebar/property-left-sidebar.component';
import { PropertyThumbnailImagesComponent } from './property-thumbnail-images/property-thumbnail-images.component';
import { StickyTabComponent } from './sticky-tab/sticky-tab.component';
import { FeaturesComponent } from './widgets/features/features.component';
import { GalleryComponent } from './widgets/gallery/gallery.component';
import { HomeDetailsComponent } from './widgets/home-details/home-details.component';
import { PropertyBriefComponent } from './widgets/property-brief/property-brief.component';
import { PropertyImagesComponent } from './widgets/property-images/property-images.component';
import { PropertyTabComponent } from './widgets/property/property-tab/property-tab.component';
import { PropertySliderComponent } from './widgets/property/property-slider/property-slider.component';
import { PropertyComponent } from './widgets/property/property.component';
import { PropetyDetailsComponent } from './widgets/propety-details/propety-details.component';
import { PropetyFloorPlanComponent } from './widgets/propety-floor-plan/propety-floor-plan.component';
import { PropetyLocationComponent } from './widgets/propety-location/propety-location.component';
import { RelatedPropertyComponent } from './widgets/related-property/related-property.component';
import { ReviewComponent } from './widgets/review/review.component';
import { VideoComponent } from './widgets/video/video.component';
import { PropertyImageBoxHomeSectionComponent } from './property-image-box/property-image-box-home-section/property-image-box-home-section.component';
import { PropertyTemplateBreadcrumbComponent } from './property-template-breadcrumb/property-template-breadcrumb.component';
import { PropertyModalDetailsComponent } from './property-modal-details/property-modal-details.component';
import { RequestExplorationFormComponent } from './widgets/request-exploration-form/request-exploration-form.component';
import { WithoutTopComponent } from './without-top/without-top.component';
import { ContractComponent  }  from "./contract/contract.component";


@NgModule({
    declarations: [
        StickyTabComponent,
        HomeDetailsComponent,
        PropertyBriefComponent,
        FeaturesComponent,
        GalleryComponent,
        VideoComponent,
        PropetyDetailsComponent,
        PropetyFloorPlanComponent,
        PropetyLocationComponent,
        ReviewComponent,
        WithoutTopComponent,
        PropertyImagesComponent,
        PropertyTabComponent,
        PropertyLeftSidebarComponent,
        PropertyComponent,
        PropertySliderComponent,
        PropertyInfoTabComponent,
        RelatedPropertyComponent,
        PropertyImageSliderComponent,
        PropertyImageSliderHomeSectionComponent,
        PropertyThumbnailImagesComponent,
        PropertyImageBoxComponent,
        PropertyImageBoxHomeSectionComponent,
        PropertyTemplateBreadcrumbComponent,
        PropertyModalDetailsComponent,
        RequestExplorationFormComponent,
    ],
    imports: [
        CommonModule,
        PropertyRoutingModule,
        SharedModule,
        CarouselModule,
        BarRatingModule,
        NgbRatingModule,
        ContractComponent
    ],
    exports: [
        PropertyComponent
    ]
})
export class PropertyModule {}
