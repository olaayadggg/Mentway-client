import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';
import { SessionService } from 'src/app/modules/session-module/service/session.service';
import { environment } from 'src/environments/environment';
import { BusinessServiceService } from '../services/business-service.service';
import { Location } from '@angular/common';
// impot BusinessServiceService
@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {
  @Input()  id:number = 0;
  
 
  rows: any = []
  role = 'MENTOR'
  totalItems = 0;
  itemsPerPage = 0;
  currentPage = 1;
  headers = ["Title", "Duration", "price", "Action"]
 path='';
  constructor(
    private bService: BusinessServiceService,
    private authService: AuthService,
    private location:Location


  ) {
    if(this.id===0){

      this.id = this.authService.getloggedUserId()
    }
    this.path=this.location.path()
  }
  ngOnInit(): void {
    this.getMentorServices(0)
  }

  getMentorServices(page = 0) {
    return this.bService.getServiceByMentorId(this.id, page)
      .subscribe({
        next: (res: any) => {
          console.log('abdksada',res)
          this.totalItems = res?.totalElements
          this.itemsPerPage = res?.size
          this.currentPage = res?.number
          this.rows = res
        }
      })
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    // call your api with page number
    console.log("fetch page: ", this.currentPage)
    if (this.authService.getloggedUserRole() === 'MENTOR') {
      this.getMentorServices(page)
    }


  }
}
