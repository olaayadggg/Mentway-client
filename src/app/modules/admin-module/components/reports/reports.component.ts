import { Component, OnInit } from '@angular/core';
import { BusinessServiceService } from 'src/app/shared/services/business-service.service';
import { AdminService } from '../../admin-service/admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private bService:BusinessServiceService,
    private adminService:AdminService) {
      this.backend_url=environment.API_URL
     }
backend_url=''
    items:any[]=[]
  isRequestAccepted: boolean = false;
  isRequestRejected: boolean = false;
  ngOnInit(): void {

    this.adminService.getUnPaid().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.items=res.content
      }
    })
  }
  mentorData = [
    {
      "name": "Shahira Shahir",
      "startDate": new Date().toISOString(),
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



  formateDate(dateString: any) {
    const date = new Date(dateString);

    return date.toLocaleString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: true, timeZone: 'Africa/Cairo'
    });
  }

  acceptRequest(item: any) {
    this.adminService.payMentor(item?.applicationId).subscribe({
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
      }, error: (err) => {
        console.log(err)
      }
    })
  }
}
