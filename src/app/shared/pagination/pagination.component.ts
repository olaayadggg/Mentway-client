import { Component, EventEmitter, Output ,Input} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'], 
})
export class PaginationComponent {
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();
  @Input()totalItems!: number;
  @Input()itemsPerPage!: number;
  @Input()currentPage!: number;

  hidePageSize = false;
  showPageSizeOptions = false;
  showFirstLastButtons = false;
  disabled = false;
  pageEvent: PageEvent = new PageEvent;
  pageIndex = 0;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalItems= e.length;
    this.itemsPerPage = e.pageSize;
    this.currentPage = e.pageIndex;
    this.pageChanged.emit(this.currentPage);
  }


}
