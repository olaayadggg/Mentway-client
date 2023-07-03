import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';
import { SessionService } from 'src/app/modules/session-module/service/session.service';
import { environment } from 'src/environments/environment';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upcoming-sessions',
  templateUrl: './upcoming-sessions.component.html',
  styleUrls: ['./upcoming-sessions.component.css'],

})
export class UpcomingSessionsComponent implements OnInit {
  id = 0;
  backend_url = '';
  simpleDialog!: MatDialogRef<DialogComponent>;

  constructor(
    private sessionService: SessionService,
    private authService: AuthService,
    private dialogModel: MatDialog,
    private router: Router,
  ) {
    // this.authService.setloggedUser()
    this.id = this.authService.getloggedUserId();
    this.backend_url=environment.API_URL
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
  formateDate(dateString: any) {
    const date = new Date(dateString);

    return date.toLocaleString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: true, timeZone: 'Africa/Cairo'
    });
  }

  getMenteeSessions(page = 0) {
    return this.sessionService.getMenteeSessions(page, 1, this.id).subscribe({
      next: (res: any) => {
        console.log(res?.content[0])
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

    // console.log("abc")
    return this.sessionService.getMentorSessions(page, 1, this.id).subscribe({
      next: (res: any) => {
        console.log(res?.content[0])
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

  dialog() {
    this.simpleDialog = this.dialogModel.open(DialogComponent);
  }
  joinSession(serviceId: number, sessionDate: any, duration: any, row: any) {
    console.log(sessionDate)
    const sessionStartTime = new Date(sessionDate);

    // Step 2: Add the session duration to the session start time to get the session end time
    const sessionEndTime = new Date(sessionStartTime.getTime() + duration * 60 * 60 * 1000);

    // Step 3: Create a new Date object for the current time
    const now = new Date();
    // Step 4: Check if the current time is between the session start time and the session end time
    if (now >= sessionStartTime && now <= sessionEndTime) {
      console.log("You can join the session.");
      this.router.navigate([`/session/${row.meetingUrl}`], {
        state: {
          'application': row,
        }
      })
    } else {
      console.log("The session has already ended or has not started yet.");
      this.dialog()
    }
    // const sessionEndDate = this.addHoursToDateTimeIso(sessionDate, duration);
    // if(new Date(sessionDate)<new Date()){
    //   if(new Date(sessionEndDate)>)
    // }
    // console.log(serviceId, sessionDate)
    // // console.log(time)
  }

  addHoursToDateTimeIso(date: any, hourToAdd: any) {
    const mydate = new Date(date);
    mydate.setHours(mydate.getHours() + hourToAdd);
    const updatedIsoDateTime = mydate.toISOString();
    return updatedIsoDateTime;
  }

}
