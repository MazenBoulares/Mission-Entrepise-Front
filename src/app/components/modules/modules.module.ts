import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { HomeModule } from '../home/home.module';

import { ModulesButtonComponent } from './modules-button/modules-button.component';
import { ModulesLabelComponent } from './modules-label/modules-label.component';
import { ModulesTitleComponent } from './modules-title/modules-title.component';
import { ModulesImageRatioComponent } from './modules-image-ratio/modules-image-ratio.component';
import { ModulesFooterComponent } from './modules-footer/modules-footer.component';
import { ModulesBlogComponent } from './modules-blog/modules-blog.component';
import { ModulesBrandComponent } from './modules-brand/modules-brand.component';
import { ModulesTestimonialComponent } from './modules-testimonial/modules-testimonial.component';
import { ModulesFullBannerComponent } from './modules-full-banner/modules-full-banner.component';
import { ModulesAboutComponent } from './modules-about/modules-about.component';
import { ModulesServiceComponent } from './modules-service/modules-service.component';
import { ModulesPropertyComponent } from './modules-property/modules-property.component';
import { ModulesFeatureComponent } from './modules-feature/modules-feature.component';
import { ModulesOthersComponent } from './modules-others/modules-others.component';


@NgModule({
  declarations: [
    ModulesButtonComponent,
    ModulesLabelComponent,
    ModulesTitleComponent,
    ModulesImageRatioComponent,
    ModulesFooterComponent,
    ModulesBlogComponent,
    ModulesBrandComponent,
    ModulesTestimonialComponent,
    ModulesFullBannerComponent,
    ModulesAboutComponent,
    ModulesServiceComponent,
    ModulesPropertyComponent,
    ModulesFeatureComponent,
    ModulesOthersComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule,
    GalleryModule,
    LightboxModule,
    HomeModule
  ]
})
export class ModulesModule { }
