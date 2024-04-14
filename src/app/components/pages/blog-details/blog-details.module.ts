import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { BlogPageModule } from '../blog-page/blog-page.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { BlogDetailsLeftSidebarComponent } from './blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './blog-details-right-sidebar/blog-details-right-sidebar.component';
import { BlogDetailsNoSidebarComponent } from './blog-details-no-sidebar/blog-details-no-sidebar.component';
import { BlogDetailsWithGalleryComponent } from './blog-details-with-gallery/blog-details-with-gallery.component';
import { BlogDetailsWithVideoComponent } from './blog-details-with-video/blog-details-with-video.component';
import { BlogDetailComponent } from './widgets/blog-detail/blog-detail.component';
import { BlogDetailCommentsComponent } from './widgets/blog-detail-comments/blog-detail-comments.component';
import { BlogDetailLeaveCommentsComponent } from './widgets/blog-detail-leave-comments/blog-detail-leave-comments.component';


@NgModule({
  declarations: [
    BlogDetailsLeftSidebarComponent,
    BlogDetailsRightSidebarComponent,
    BlogDetailsNoSidebarComponent,
    BlogDetailsWithGalleryComponent,
    BlogDetailsWithVideoComponent,
    BlogDetailComponent,
    BlogDetailCommentsComponent,
    BlogDetailLeaveCommentsComponent
  ],
  imports: [
    CommonModule,
    BlogDetailsRoutingModule,
    SharedModule,
    BlogPageModule,
    CarouselModule
  ]
})
export class BlogDetailsModule { }
