import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = `${environment.API_URL}/api/v1/auth`;


  constructor(private http: HttpClient, private router: Router) { }

  setloggedUser(user?: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getloggedUser() {
    const user: string | any = localStorage.getItem('user')
    const paresd = JSON.parse(user)
    return paresd || null;
  }
  getloggedUserRole() {
    const user = this.getloggedUser()
    if (user && Object.keys(user).length>0){
    return  user?.authorities[0] 
      // return role || null;
    }
    return null
  }

  getloggedUserId() {
    const user = this.getloggedUser()
    return user?.id || null;
  }
  setIsloggedIn(value: boolean) {
    localStorage.setItem('loggedIn', JSON.stringify(value));
  }
  CheckIsLoggedIn() {
    const logged: boolean | any = localStorage.getItem('loggedIn')
    return JSON.parse(logged) || false
  }
  setloggedUserToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }
  getloggedUserToken() {
    const user = this.getloggedUser()
    return user?.jwt;

  }

  login(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  hasPayment(){
    const user = this.getloggedUser()
    return user?.hasValidPaymentMethod || false; 
  }
  setValidPayment(){
    const user = this.getloggedUser()
    if(user){
      user.hasValidPaymentMethod=true;
      this.setloggedUser(user)
    }

  }
  registerMentor(registerData: any) {
    return this.http.post(`${this.baseUrl}/register/mentor`, registerData);
  }


  registerMentee(registerData: any) {
    return this.http.post(`${this.baseUrl}/register/mentee`, registerData);
  }

  logout() {
    this.setIsloggedIn(false)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.router.navigate(['/landing'])
  }

}
