import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  loggedUser: any
  loggedUserRole: any
  isLoggedIn:boolean = false
  back_end_url: string = `${environment.API_URL}`;
  constructor(public location: Location, private router: Router, private authService: AuthService) {
    this.loggedUser = this.authService.getloggedUser();
    this.loggedUserRole = this.authService.getloggedUserRole();
    this.isLoggedIn = this.authService.CheckIsLoggedIn();    
  }

  
  ngOnInit() {
    this.isLoggedIn = this.authService.CheckIsLoggedIn();    
  }

  get getImageUrl() {
    return this.loggedUser.imgUrl
  }

  logout() {
    this.isLoggedIn=false;
    this.authService.logout()
  }
}
