import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = `${environment.API_URL}/api/v1/auth`;
  private user: any;

  constructor(private http: HttpClient, private router: Router) { }

 setloggedUser(user?: any) {
   localStorage.setItem('user', JSON.stringify(user));
  }

  getloggedUser() {
    return JSON.parse(localStorage.getItem('user') || '');
  }
  getloggedUserRole() {
    const user=this.getloggedUser()
    return user?.authorities[0];
  }

  getloggedUserId() {
    const user = this.getloggedUser()
    return user?.id;
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

  register(registerData: any) {
    return this.http.post(`${this.baseUrl}/register`, registerData);
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

}
