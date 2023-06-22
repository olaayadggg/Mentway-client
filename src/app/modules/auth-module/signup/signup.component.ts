import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    // focus;
    // focus1;
    // focus2;
    /**
   * ========================
   *   After signup success
   *    use (set) auth.service.loggedUser(user) 
   *    use (set) auth.service.loggedUserToken(token) 
   * 
   */
    constructor() { }

    ngOnInit() {}
}
