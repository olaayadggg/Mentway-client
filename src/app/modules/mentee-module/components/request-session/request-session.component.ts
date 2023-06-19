import { Component } from '@angular/core';
// import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-request-session',
  // standalone: true,
  // imports: [NgbDatepickerModule, FormsModule],
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.scss']
})
export class RequestSessionComponent {
  // model: NgbDateStruct;
	// date: { year: number; month: number };

	// constructor(private calendar: NgbCalendar) {}

	// selectToday() {
	// 	this.model = this.calendar.getToday();
	// }
}

