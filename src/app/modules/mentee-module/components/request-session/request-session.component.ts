import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MenteeService } from '../../mentee-service/mentee.service';
import { BusinessServiceService } from 'src/app/shared/services/business-service.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);
import { TimePicker } from '@syncfusion/ej2-calendars';




@Component({
  selector: 'app-request-session',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, NgFor],
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.scss']
})
export class RequestSessionComponent implements OnInit {

  events: string[] = [];
  activatedRoute: any;

  constructor(private menteeService: MenteeService, private businessService: BusinessServiceService) {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  

}


