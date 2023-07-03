import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';
import { environment } from 'src/environments/environment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
  public isCollapsed = true;
  loggedUser: any
  loggedUserRole: any
  isLoggedIn: boolean = false
  back_end_url: string = `${environment.API_URL}`;
  path=''
  mentorId:any
  constructor(
    public location: Location,
    private router: Router, 
    private authService: AuthService,
    private paymentService:PaymentService,
    ) {
    this.loggedUser = this.authService.getloggedUser();
    this.loggedUserRole = this.authService.getloggedUserRole();
    this.isLoggedIn = this.authService.CheckIsLoggedIn();
    this.mentorId=this.authService.getloggedUserId()
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  
  
  ngOnInit() {
    this.isLoggedIn = this.authService.CheckIsLoggedIn();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.loggedUser = this.authService.getloggedUser();
        this.loggedUserRole = this.authService.getloggedUserRole();
        this.isLoggedIn = this.authService.CheckIsLoggedIn();
        this.mentorId = this.authService.getloggedUserId()

        // console.log("nav------------------------")
        // re-render the navbar component
        // add your code here to update the navbar component
      }
    });
    this.path=this.location.path()
  }

  get getImageUrl() {
    return this.loggedUser.imgUrl
  }

  logout() {
    this.isLoggedIn = false;
    this.authService.logout()
  }
  addPayemntToMentor(){
    this.paymentService.addPayemntToMentor(this.mentorId).subscribe({
      next:(res:any)=>{
        console.log(res)
       window.location.href=`${res.validationUrl}`
      }
    })
  }
}
