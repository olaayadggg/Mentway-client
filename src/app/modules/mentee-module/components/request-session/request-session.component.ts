import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MenteeService } from '../../mentee-service/mentee.service';
import { BusinessServiceService } from 'src/app/shared/services/business-service.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-request-session',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, NgFor],
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {

  events: string[] = [];
  activatedRoute: any;
  Form: FormGroup = new FormGroup({
  startDate: new FormControl('', [Validators.required]),
  applicationDetails : new FormControl('', [Validators.required]),
  })

  constructor(private menteeService: MenteeService, private businessService: BusinessServiceService, private router: Router) {

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }
  getDateTime(){
    return this.Form.controls['datetime'];
  }
  getComment(){
    return this.Form.controls['comment'];
  }

  ///////////////// error @sar7an //////////////////

  // submit(e: Event) {
  //   e.preventDefault();
  //   if (this.Form.status == 'VALID') {
  //     console.log(this.Form.value)
  //     this.businessService.applyForService({
  //       startDate: this.getDateTime.value,
  //       applicationDetails: this.getComment.value,
  //     }).subscribe({
  //       next: (res) => {
  //         console.log(res)
  //         this.router.navigate(['/mentee/confirm'])
  //       }
  //     })
  //   } else {
  //     console.log(this.Form.errors)
  //     this.Form.markAllAsTouched();
  //   }
  // }
}



