import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  flag = true;
  toggle():any{
    if (this.flag == true){
      this.flag = false
    }else{
      this.flag = true
    }
  }
}
