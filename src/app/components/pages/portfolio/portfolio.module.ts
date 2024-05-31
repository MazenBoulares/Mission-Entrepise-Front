import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { Grid2Component } from './grid2/grid2.component';
import { SharedModule } from '../../../shared/shared.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { GalleryModule } from 'ng-gallery';
import {  LightboxModule } from 'ng-gallery/lightbox';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { defineElement } from 'lord-icon-element';
import { GridTabComponent } from './widgets/grid-tab/grid-tab.component';
import { CommonGridImagesComponent } from './widgets/common-grid-images/common-grid-images.component';
import { Grid3Component } from './grid3/grid3.component';
import { Grid4Component } from './grid4/grid4.component';
import { GridTitle2Component } from './grid-title2/grid-title2.component';
import { GridTitle3Component } from './grid-title3/grid-title3.component';
import { GridTitle4Component } from './grid-title4/grid-title4.component';
import { Masonry3Component } from './masonry3/masonry3.component';
import { Masonry4Component } from './masonry4/masonry4.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { CenterSlideComponent } from './center-slide/center-slide.component';
import { Creative1Component } from './creative1/creative1.component';
import { Creative2Component } from './creative2/creative2.component';
import { Creative3Component } from './creative3/creative3.component';
import { Creative4Component } from './creative4/creative4.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { AboutProjectComponent } from './portfolio-details/about-project/about-project.component';
import { PortfolioDetailsImagesComponent } from './portfolio-details/portfolio-details-images/portfolio-details-images.component';

import lottie from 'lottie-web';
import 'hammerjs';
import 'mousetrap';

@NgModule({
  declarations: [Grid2Component, GridTabComponent, CommonGridImagesComponent, Grid3Component, Grid4Component, GridTitle2Component, GridTitle3Component, GridTitle4Component,Masonry3Component,Masonry4Component, ParallaxComponent, CenterSlideComponent, Creative1Component, Creative2Component, Creative3Component, Creative4Component, PortfolioDetailsComponent, AboutProjectComponent, PortfolioDetailsImagesComponent],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule, NgxMasonryModule,GalleryModule,LightboxModule, CarouselModule],
  exports: [Grid2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
