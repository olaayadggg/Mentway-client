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
export class NavbarComponent implements OnInit, OnChanges {
  public isCollapsed = true;
  loggedUser: any
  loggedUserRole: any
  isLoggedIn: boolean = false
  back_end_url: string = `${environment.API_URL}`;
  path=''
  constructor(
    public location: Location,
    private router: Router, private authService: AuthService) {
    this.loggedUser = this.authService.getloggedUser();
    this.loggedUserRole = this.authService.getloggedUserRole();
    this.isLoggedIn = this.authService.CheckIsLoggedIn();
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
        // console.log("nav------------------------")
        // re-render the navbar component
        // add your code here to update the navbar component
      }
    });
    this.path=this.location.path()
  }

  get getImageUrl() {
    return this.loggedUser.imgUrl.length > 20? this.loggedUser.imgUrl: this.loggedUser
  }

  logout() {
    this.isLoggedIn = false;
    this.authService.logout()
  }

}
