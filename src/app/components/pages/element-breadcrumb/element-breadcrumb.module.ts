import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { GridViewModule } from '../../listing/grid-view/grid-view.module';

import { ElementBreadcrumbRoutingModule } from './element-breadcrumb-routing.module';
import { ImageWithEffectComponent } from './image-with-effect/image-with-effect.component';
import { BreadcrumbRightComponent } from './breadcrumb-right/breadcrumb-right.component';


@NgModule({
  declarations: [
    ImageWithEffectComponent,
    BreadcrumbRightComponent
  ],
  imports: [
    CommonModule,
    ElementBreadcrumbRoutingModule,
    SharedModule,
    PortfolioModule,
    GridViewModule
  ]
})
export class ElementBreadcrumbModule { }
