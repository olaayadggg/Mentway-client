import { Component, OnInit,Input, Output, EventEmitter, ViewEncapsulation, Directive  } from '@angular/core';
import { MentorService } from 'src/app/modules/mentor-module/mentor-service/mentor.service';
import { MenteeService } from 'src/app/modules/mentee-module/mentee-service/mentee.service';
@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class RateComponent implements OnInit {
  @Input() id: any
  @Input() userRate: any = null

  @Input() avg_rate: any=null
  max = 5;
  rate = 0;
  @Input() isReadonly:boolean = false;

  constructor(private mentorService: MentorService , private menteeService: MenteeService) {
  }
  ngOnInit(): void {
    if (this.userRate) {
      this.rate = this.userRate.rate
    }
    if (this.avg_rate){
      this.rate=this.avg_rate
    }
  }


  rateMentor() {
    if(!this.userRate){
      // this.mentorService.rate(Number(this.id), this.rate).subscribe(
      //   {
      //     next: (res) => {
      //       console.log(res);
      //     },
      //     error: (err) => {
      //       console.log(err);
      //     }
      //   }
      // )
    }else{
      // this.mentorService.rateUpdate(Number(this.userRate.id),Number(this.id), this.rate).subscribe(
      //   {
      //     next: (res) => {
      //       console.log(res);
      //     },
      //     error: (err) => {
      //       console.log(err);
      //     }
      //   }
      // )
    }
  }
  headers = ["Mentor lists","Scheduled Date","Scheduled Timing","Action"]
  rows = [
    {
      "mentor": 'Mentor 1',
      "profile-pic": './assets/img/theme/team-1-800x800.jpg',
      "rating": 5,
      "scheduledDate2": 'HTML',
    },
    {
      "mentor": 'Mentor 2',
      "profile-pic": './assets/img/theme/team-2-800x800.jpg',
      "rating": 2,
      "scheduledDate2": 'Docker',
    },
    {
      "mentor": 'Mentor 3',
      "profile-pic": './assets/img/theme/team-3-800x800.jpg',
      "rating": 5,
      "scheduledDate2": 'Interview Preparation',
    },
    {
      "mentor": 'Mentor 4',
      "profile-pic": './assets/img/theme/team-4-800x800.jpg',
      "rating": 4,
      "scheduledDate2": 'JavaScript',
    },
    {
      "mentor": 'Mentor 5',
      "profile-pic": './assets/img/theme/team-4-800x800.jpg',
      "rating": 1,
      "scheduledDate2": 'Java',
    }
  ];

getRange(num: number): number[] {
  return Array.from({ length: num }, (_, index) => index + 1);
}

// set this numbers to 0 as default
//  data from first time calling your api
// don't forget to apply your design
totalItems = 100;
itemsPerPage = 10;
currentPage = 1;

onPageChanged(page: number) {
  this.currentPage = page;
  // call your api with page number
  console.log("fetch page: ", this.currentPage)
}

    // if(!this.userRate){
    //   this.mentorService.rate(Number(this.id), this.rate).subscribe(
    //     {
    //       next: (res) => {
    //         console.log(res);
    //       },
    //       error: (err) => {
    //         console.log(err);
    //       }
    //     }
    //   )
    // }else{
    //   this.mentorService.rateUpdate(Number(this.userRate.id),Number(this.id), this.rate).subscribe(
    //     {
    //       next: (res) => {
    //         console.log(res);
    //       },
    //       error: (err) => {
    //         console.log(err);
    //       }
    //     }
    //   )
    // }
  }


