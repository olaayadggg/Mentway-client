import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessServiceService } from '../services/business-service.service';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {

  serviceId: any;
  service: any;
  userRole: any = ''
  validPayment:any
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bService: BusinessServiceService,
  ) {
    this.userRole = this.authService.getloggedUserRole()
    this.serviceId = Number(this.activatedRoute.snapshot.paramMap.get('id'))!;
    this.validPayment=this.authService.hasPayment()
  }
  ngOnInit(): void {
    this.bService.getServicebyId(this.serviceId).subscribe({
      next: (res: any) => {
        console.log(res)
        this.service = res
      }
    })
  }
  requsetOrAddPayment(){
if(this.validPayment){
  this.router.navigate([`/mentee/date-pick/${this.serviceId}`])
}else{
  
  this.router.navigate([`/payment`])
}
    // routerLink = "/mentee/date-pick/{{serviceId}}"
  }
}
