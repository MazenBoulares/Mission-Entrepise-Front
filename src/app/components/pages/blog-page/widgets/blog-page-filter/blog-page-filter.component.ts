import { Component } from '@angular/core';
import { popularTags } from '../../../../../shared/data/advance-filter';

@Component({
  selector: 'app-blog-page-filter',
  templateUrl: './blog-page-filter.component.html',
  styleUrls: ['./blog-page-filter.component.scss'],
})
export class BlogPageFilterComponent {

  public popularTags = popularTags;

}
