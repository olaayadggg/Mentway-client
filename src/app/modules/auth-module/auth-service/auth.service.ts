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

  public set loggedUser(user: any) {
    this.user=user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  public get loggedUser() {
    return JSON.parse(localStorage.getItem('user') || '');
  }
  public get loggedUserRole() {
    return this.user.role;
  }
  public set loggedUserToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
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
