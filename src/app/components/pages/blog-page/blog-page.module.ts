import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageRoutingModule } from './blog-page-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { NgxMasonryModule } from 'ngx-masonry';

import { BlogPageLeftSidebarComponent } from './blog-page-left-sidebar/blog-page-left-sidebar.component';
import { BlogPageRightSidebarComponent } from './blog-page-right-sidebar/blog-page-right-sidebar.component';
import { BlogPageNoSidebarComponent } from './blog-page-no-sidebar/blog-page-no-sidebar.component';
import { BlogPageFilterComponent } from './widgets/blog-page-filter/blog-page-filter.component';
import { BlogPageBlogdataComponent } from './widgets/blog-page-blogdata/blog-page-blogdata.component';
import { BlogPageCreativeLeftSidebarComponent } from './blog-page-creative-left-sidebar/blog-page-creative-left-sidebar.component';
import { BlogPageCreativeRightSidebarComponent } from './blog-page-creative-right-sidebar/blog-page-creative-right-sidebar.component';
import { BlogPageCreativeNoSidebarComponent } from './blog-page-creative-no-sidebar/blog-page-creative-no-sidebar.component';
import { BlogPageListNoSidebarComponent } from './blog-page-list-no-sidebar/blog-page-list-no-sidebar.component';
import { BlogPageListLeftSidebarComponent } from './blog-page-list-left-sidebar/blog-page-list-left-sidebar.component';
import { BlogPageListRightSidebarComponent } from './blog-page-list-right-sidebar/blog-page-list-right-sidebar.component';
import { BlogPageMasonryRightSidebarComponent } from './blog-page-masonry-right-sidebar/blog-page-masonry-right-sidebar.component';
import { BlogPageMasonryLeftSidebarComponent } from './blog-page-masonry-left-sidebar/blog-page-masonry-left-sidebar.component';
import { BlogPageMasonryNoSidebarComponent } from './blog-page-masonry-no-sidebar/blog-page-masonry-no-sidebar.component';
import { BlogPageMixListLeftSidebarComponent } from './blog-page-mix-list-left-sidebar/blog-page-mix-list-left-sidebar.component';
import { BlogPageMixListRightSidebarComponent } from './blog-page-mix-list-right-sidebar/blog-page-mix-list-right-sidebar.component';
import { BlogPageMixGridRightSidebarComponent } from './blog-page-mix-grid-right-sidebar/blog-page-mix-grid-right-sidebar.component';
import { BlogPageMixGridLeftSidebarComponent } from './blog-page-mix-grid-left-sidebar/blog-page-mix-grid-left-sidebar.component';


@NgModule({
  declarations: [
    BlogPageLeftSidebarComponent,
    BlogPageRightSidebarComponent,
    BlogPageNoSidebarComponent,
    BlogPageFilterComponent,
    BlogPageBlogdataComponent,
    BlogPageCreativeLeftSidebarComponent,
    BlogPageCreativeRightSidebarComponent,
    BlogPageCreativeNoSidebarComponent,
    BlogPageListNoSidebarComponent,
    BlogPageListLeftSidebarComponent,
    BlogPageListRightSidebarComponent,
    BlogPageMasonryRightSidebarComponent,
    BlogPageMasonryLeftSidebarComponent,
    BlogPageMasonryNoSidebarComponent,
    BlogPageMixListLeftSidebarComponent,
    BlogPageMixListRightSidebarComponent,
    BlogPageMixGridRightSidebarComponent,
    BlogPageMixGridLeftSidebarComponent
  ],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    SharedModule,
    NgxMasonryModule,
  ],
  exports: [
    BlogPageFilterComponent
  ]
})
export class BlogPageModule { }
