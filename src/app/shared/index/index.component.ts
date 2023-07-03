import { Component } from '@angular/core';
import { RequestsComponent } from '../requests/requests.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { UpcomingSessionsComponent } from '../upcoming-sessions/upcoming-sessions.component';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';
// AuthService
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  currentDiv: string = 'upcoming';
  currentLink: string = 'upcoming';
  currentLinkText: string = 'Upcoming Session';
user:any;
role:any
constructor(private authService:AuthService){
  this.role=this.authService.getloggedUserRole()
  this.user=this.authService.getloggedUser()
}
  showDiv(divName: string,linkText: string) {
    this.currentDiv = divName;
    this.currentLink = divName;
    this.currentLinkText = linkText;

  }
  selectedBooking: any;

  viewDetails() {
    // this.selectedBooking = booking;
  }
 
}
