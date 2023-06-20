import { Component } from '@angular/core';
import {MatDatepickerModule,MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common';


@Component({
  selector: 'app-request-session',
   standalone: true,
   imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,NgFor],
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.scss']
})
export class RequestSessionComponent {
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
}


