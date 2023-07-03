import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/modules/session-module/service/session.service';
import { BusinessServiceService } from 'src/app/shared/services/business-service.service';

@Component({
  selector: 'app-confirm-request',
  templateUrl: './confirm-request.component.html',
  styleUrls: ['./confirm-request.component.css']
})
export class ConfirmRequestComponent {
  id: number = 0;
  MyData: any | null = null;
  service: any
  showData: boolean = false;
  constructor(
    private router: Router,
    private bService: BusinessServiceService,
    private sessionService: SessionService

  ) {
    this.MyData = this.router.getCurrentNavigation()?.extras.state
    if (this.MyData) {
      this.bService.getServicebyId(this.MyData?.serviceId).subscribe({
        next: (res: any) => {
          this.service = res
        }

      })
    }
    // console.log("router------------", this.router.getCurrentNavigation()?.extras.state);


  }
  formateDate(dateString: any) {
    const date = new Date(dateString);

    return date.toLocaleString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: true, timeZone: 'Africa/Cairo'
    });
  }


  submit() {
    this.bService.applyForService(this.MyData?.serviceId, {
      'startDate': this.MyData?.startDate,
      'applicationDetails': this.MyData?.applicationDetails,
    }).subscribe({
      next: (res: any) => {
        console.log(res)

        this.showData = true;
        setTimeout(() => {
          this.router.navigate(['/mentee/dashboard'])

        }, 3000)

      }, error: (err) => {
        console.log(err)
        alert(err.error.details.date)
      }
    })
  }

}
