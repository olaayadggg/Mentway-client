import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';
import { BusinessServiceService } from '../services/business-service.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  rows: any;
  sessionService: any;
  id: number = 0
  menteeData: any[] = []
  // mentorData: any[] = []
  constructor(
    private bService: BusinessServiceService,
    private authService: AuthService,
  ) {
    this.role = this.authService.getloggedUserRole();
    this.id = this.authService.getloggedUserId()
  }
  ngOnInit(): void {
    if (this.authService.getloggedUserRole() === 'MENTOR') {
      this.getMentorRequests(0)
    }
    else if (this.authService.getloggedUserRole() === 'MENTEE') {
      this.getMenteeRequests(0);
    }
  }
  role = "mentor"
  isRequestAccepted: boolean = false;
  isRequestRejected: boolean = false;
  mentorData = [
    {
      "name": "Shahira Shahir",
      "startDate":new Date().toISOString(),
      "applicationDetails": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "profile-pic": "./assets/img/theme/team-1-800x800.jpg",
      isRequestAccepted: false,
      isRequestRejected: false
    },
    {
      "name": "Samira Samir",
      "bank": "Alahly",
      "coverLetter": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "profile-pic": "./assets/img/theme/team-2-800x800.jpg",
      isRequestAccepted: false,
      isRequestRejected: false,
      "startDate": new Date().toISOString(),
      "applicationDetails": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
    },
    {
      "name": "Bahira Bahir",
      "bank": "Misr",
      "startDate": new Date().toISOString(),
      "applicationDetails": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "coverLetter": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "profile-pic": "./assets/img/theme/team-3-800x800.jpg",
      isRequestAccepted: false,
      isRequestRejected: false
    },
  ]

  headers = ["Title", "Mentor", "Date Time", "Duration", "Price", "Status"]
  acceptRequest(item: any) {
    this.bService.acceptOrRejectRequest(item?.applicationId, "accepted").subscribe({
      next: (res: any) => {
        console.log(res)
        item.isRequestAccepted = true;
      }, error: (err) => {
        console.log(err)
      }
    })

  }

  rejectRequest(item: any) {
    this.bService.acceptOrRejectRequest(item?.applicationId, "REJECTED").subscribe({
      next: (res: any) => {
        console.log(res)
        item.isRequestRejected = true;
      },error:(err)=>{
        console.log(err)
      }
    })
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
    if (this.authService.getloggedUserRole() === 'MENTOR') {
      this.getMentorRequests(page)
    }
    else if (this.authService.getloggedUserRole() === 'MENTEE') {
      this.getMenteeRequests(page);
    }
  }

  getMenteeRequests(page = 0) {
    return this.bService.getMenteePendeningApplications(page, 4).subscribe({
      next: (res: any) => {
        console.log(res?.content)
        this.totalItems = res?.totalElements
        this.itemsPerPage = res?.size
        this.currentPage = res?.number
        this.menteeData = res?.content
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  getMentorRequests(page = 0) {

    // console.log("abc")
    return this.bService.getMentorApplications(page,4).subscribe({
      next: (res: any) => {
        console.log(res?.content[0])
        this.totalItems = res?.totalElements
        this.itemsPerPage = res?.size
        this.currentPage = res?.number
        this.mentorData = res?.content
      }, error: (err) => {
        console.log(err)
      }
    })
  }




  formateDate(dateString: any) {
    const date = new Date(dateString);

    return date.toLocaleString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: true, timeZone: 'Africa/Cairo'
    });
  }
}
