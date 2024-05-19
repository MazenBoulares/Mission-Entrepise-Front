import { Component, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { review } from '../../../../shared/interface/property';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {

  @Input() reviewData: review[];

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}
