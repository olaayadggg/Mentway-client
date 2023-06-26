import { Component, OnInit } from '@angular/core';
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
    loggedUser:any
    private baseUrl: string = `${environment.API_URL}/api/v1`;
    constructor(public location: Location, private router: Router , private authService: AuthService) {
    }

    ngOnInit() {
    const user:any=localStorage.getItem('user')
    this.loggedUser= JSON.parse(user)
    }

    get getImageUrl(){
      return this.loggedUser.picture
     }

    logout(){
      this.authService.logout()
    }
}
