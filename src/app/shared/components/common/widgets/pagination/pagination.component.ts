import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { latestForRent } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {

  @Input() products: latestForRent[] = [];
  @Input() paginate: any = {};
  @Input() total: number;
  @Input() currentPage: number;
  @Input() pageSize: number;

  @Output() setPage: EventEmitter<number> = new EventEmitter();

  constructor() {}

  pageSet(page: number) {
    this.setPage.emit(page); // Set Page Number
  }
}
