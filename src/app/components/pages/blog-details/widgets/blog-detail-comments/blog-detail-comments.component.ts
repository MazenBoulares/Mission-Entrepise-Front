import { Component, Input } from '@angular/core';
import { comments } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-blog-detail-comments',
  templateUrl: './blog-detail-comments.component.html',
  styleUrls: ['./blog-detail-comments.component.scss'],
})
export class BlogDetailCommentsComponent {

  @Input() commentsData: comments;

}
