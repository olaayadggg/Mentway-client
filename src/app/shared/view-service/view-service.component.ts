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
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bService: BusinessServiceService,
  ) {
    this.userRole = this.authService.getloggedUserRole()
    this.serviceId = Number(this.activatedRoute.snapshot.paramMap.get('id'))!;
  }
  ngOnInit(): void {
    this.bService.getServicebyId(this.serviceId).subscribe({
      next: (res: any) => {
        console.log(res)
        this.service = res
      }
    })
  }
}
