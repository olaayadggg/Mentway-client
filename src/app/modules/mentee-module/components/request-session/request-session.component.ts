import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MenteeService } from '../../mentee-service/mentee.service';
import { BusinessServiceService } from 'src/app/shared/services/business-service.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {DateTimePickerModule} from "@syncfusion/ej2-angular-calendars";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';





@Component({
  selector: 'app-request-session',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {
  serviceId: any
  events: string[] = [];
  Form!: FormGroup;

  constructor(private menteeService: MenteeService,
    private businessService: BusinessServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.serviceId = Number(this.activatedRoute.snapshot.paramMap.get('id'))!;

  }

  ngOnInit(): void {

    this.Form = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      applicationDetails: new FormControl('', [Validators.required]),
    })
  }

  get DateTime() {
    return this.Form.controls['startDate'];
  }
  get Comment() {
    return this.Form.controls['applicationDetails'];
  }


  submit(e: Event) {
    e.preventDefault();
    if (this.Form.status == 'VALID') {
      console.log(this.Form.value)
      //  navigate to confirm request
      this.router.navigateByUrl('/abc', {
        state: {
          'serviceId': this.serviceId,
          'startDate': this.DateTime.value,
          'applicationDetails': this.Comment.value,
        }
});

    // }

    // this.businessService.applyForService(this.serviceId, {
    //   'startDate': this.DateTime.value,
    //   'applicationDetails': this.Comment.value,
    // }).subscribe({
    //   next: (res) => {
    //     console.log(res)
    //     this.router.navigate(['/mentee/confirm'])
    //   }
    // })
  } else {
  console.log(this.Form.errors)
  this.Form.markAllAsTouched();
}
  }

}



