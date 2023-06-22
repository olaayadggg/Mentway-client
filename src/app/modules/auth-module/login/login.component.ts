import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // focus;
  // focus1;
  /**
   * ========================
   *   After login success
   *    use (set) auth.service.loggedUser(user) 
   *    use (set) auth.service.loggedUserToken(token) 
   * 
   */
  constructor() { }

  ngOnInit() {
  }

}
