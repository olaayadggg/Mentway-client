import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';
import { SessionService } from 'src/app/modules/session-module/service/session.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-upcoming-sessions',
  templateUrl: './upcoming-sessions.component.html',
  styleUrls: ['./upcoming-sessions.component.css']
})
export class UpcomingSessionsComponent implements OnInit {
  id = 0;
  backend_url = '';
  constructor(
    private sessionService: SessionService,
    private authService: AuthService
  ) {
    // this.authService.setloggedUser()
    this.id = this.authService.getloggedUserId();
  }

  ngOnInit(): void {
    // console.log('role', this.authService.getloggedUserRole())
    // console.log(this.authService.getloggedUserToken())
    if (this.authService.getloggedUserRole() === 'MENTOR') {
      this.getMentorSessions(0)
    }
    else if (this.authService.getloggedUserRole() === 'MENTEE') {
      this.getMenteeSessions(0);
    }
  }
  role = 'mentor';
  currentDiv: string = 'upcoming';
  currentLink: string = 'upcoming';
  currentLinkText: string = 'Upcoming Session';
  rows: any[] = []
  totalItems = 0;
  itemsPerPage = 0;
  currentPage = 1;

  showDiv(divName: string, linkText: string) {
    this.currentDiv = divName;
    this.currentLink = divName;
    this.currentLinkText = linkText;

  }
  formateDate(dateString:any){
  const date = new Date(dateString);

    return date.toLocaleString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: true, timeZone: 'UTC'
    });
}

  getMenteeSessions(page = 0) {
    return this.sessionService.getMenteeSessions(page, 1, this.id).subscribe({
      next: (res: any) => {
        console.log(res)
        this.totalItems = res?.totalElements
        this.itemsPerPage = res?.size
        this.currentPage = res?.number
        this.rows = res?.content
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getMentorSessions(page = 0) {

    console.log("abc")
    return this.sessionService.getMentorSessions(page, 1, this.id).subscribe({
      next: (res: any) => {
        console.log(res)
        this.totalItems = res?.totalElements
        this.itemsPerPage = res?.size
        this.currentPage = res?.number
        this.rows = res?.content
      }, error: (err) => {
        console.log(err)
      }
    })
  }
  selectedBooking: any;

  viewDetails() {
    // this.selectedBooking = booking;
  }
  data = {
    d1: "Yaaam",
    d2: "Wooow"
  }
  headers = ["Mentor lists", "Scheduled Date", "Scheduled Timing", "Action"]
  // rows = [
  //   {
  //     "mentor": 'Mentor 1',
  //     "profile-pic": './assets/img/theme/team-1-800x800.jpg',
  //     "scheduledDate1": '2023-06-18',
  //     "scheduledDate2": '2023-06-19',
  //   },
  //   {
  //     "mentor": 'Mentor 2',
  //     "profile-pic": './assets/img/theme/team-2-800x800.jpg',
  //     "scheduledDate1": '2023-06-18',
  //     "scheduledDate2": '2023-06-19',
  //   },
  //   {
  //     "mentor": 'Mentor 3',
  //     "profile-pic": './assets/img/theme/team-3-800x800.jpg',
  //     "scheduledDate1": '2023-05-22',
  //     "scheduledDate2": '2023-06-26',
  //   },
  //   {
  //     "mentor": 'Mentor 4',
  //     "profile-pic": './assets/img/theme/team-4-800x800.jpg',
  //     "scheduledDate1": '2023-06-18',
  //     "scheduledDate2": '2023-06-19',
  //   },
  //   {
  //     "mentor": 'Mentor 5',
  //     "profile-pic": './assets/img/theme/team-4-800x800.jpg',
  //     "scheduledDate1": '2023-06-18',
  //     "scheduledDate2": '2023-06-19',
  //   }
  // ]

  // set this numbers to 0 as default
  //  data from first time calling your api
  // don't forget to apply your design
 

  onPageChanged(page: number) {
    this.currentPage = page;
    // call your api with page number
    console.log("fetch page: ", this.currentPage)
    if (this.authService.getloggedUserRole() === 'MENTOR') {
      this.getMentorSessions(page)
    }
    else if (this.authService.getloggedUserRole() === 'MENTEE') {
      this.getMenteeSessions(page);
    }
  }

}
