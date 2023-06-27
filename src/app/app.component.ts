import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MentWay';
  constructor() {
    if (!localStorage.getItem('user')){
      localStorage.setItem('user','{}')
    }

    if (!localStorage.getItem('loggedIn')) {
      localStorage.setItem('loggedIn', JSON.stringify(false))
    }


    if (!localStorage.getItem('token')) {
      localStorage.setItem('token', '')
    }
  }
}
