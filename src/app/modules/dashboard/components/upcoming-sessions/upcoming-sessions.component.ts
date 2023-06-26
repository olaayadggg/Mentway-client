import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-sessions',
  templateUrl: './upcoming-sessions.component.html',
  styleUrls: ['./upcoming-sessions.component.css']
})
export class UpcomingSessionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  role = 'mentor';
  currentDiv: string = 'upcoming';
  currentLink: string = 'upcoming';
  currentLinkText: string = 'Upcoming Session';


  showDiv(divName: string,linkText: string) {
    this.currentDiv = divName;
    this.currentLink = divName;
    this.currentLinkText = linkText;

  }
  selectedBooking: any;

  viewDetails() {
    // this.selectedBooking = booking;
  }
  data = {
    d1:"Yaaam",
    d2:"Wooow"
  }
  headers = ["Mentor lists","Scheduled Date","Scheduled Timing","Action"]
  rows = [
    {
        "mentor": 'Mentor 1',
        "profile-pic": './assets/img/theme/team-1-800x800.jpg',
        "scheduledDate1": '2023-06-18',
        "scheduledDate2": '2023-06-19',
    },
    {
        "mentor": 'Mentor 2',
        "profile-pic": './assets/img/theme/team-2-800x800.jpg',
        "scheduledDate1": '2023-06-18',
        "scheduledDate2": '2023-06-19',
    },
    {
        "mentor": 'Mentor 3',
        "profile-pic": './assets/img/theme/team-3-800x800.jpg',
        "scheduledDate1": '2023-05-22',
        "scheduledDate2": '2023-06-26',
    },
    {
        "mentor": 'Mentor 4',
        "profile-pic": './assets/img/theme/team-4-800x800.jpg',
        "scheduledDate1": '2023-06-18',
        "scheduledDate2": '2023-06-19',
    },
    {
        "mentor": 'Mentor 5',
        "profile-pic": './assets/img/theme/team-4-800x800.jpg',
        "scheduledDate1": '2023-06-18',
        "scheduledDate2": '2023-06-19',
    }
]

}
