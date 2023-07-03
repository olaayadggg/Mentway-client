import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //  *   After login success
  //  *    use (set) auth.service.loggedUser(user)
  //  *    use (set) auth.service.loggedUserToken(token)
  //  *
  errors: any | undefined;
  Form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern(
      //   "^S*(?=S{8,})(?=S*[a-z])(?=S*[A-Z])(?=S*[d])(?=S*[W])S*$"
      // ),
    ]),
  });
  constructor(private auth: AuthService, private router: Router) { }

  get getEmail() {
    return this.Form.controls['email'];
  }

  get getPassword() {
    return this.Form.controls['password'];
  }

  get isLoggedIn() {
    return this.auth;
  }

  submit(e: Event) {
    e.preventDefault();
    if (this.Form.status == 'VALID') {
      this.auth
        .login({
          email: this.getEmail.value,
          password: this.getPassword.value,
        })
        .subscribe({
          next: (res: any) => {
            this.auth.setloggedUser(res);
            this.auth.setloggedUserToken(res.jwt);
            this.auth.setIsloggedIn(true)
            if (this.auth.getloggedUserRole() === 'MENTOR') {
              this.router.navigate(['/mentor/dashboard']);

            } else if (this.auth.getloggedUserRole() === 'MENTEE') {

              this.router.navigate(['/mentee/dashboard']);

            }
            else if (this.auth.getloggedUserRole() === 'ADMIN') {

              console.log(this.auth.getloggedUserRole())
              this.router.navigate(['/admin/reports']);

            }
            console.log(res)
            // localStorage.setItem('user',JSON.stringify( this.auth.loggedUser))
            // this.router.navigate(['/landing']);
            // localStorage.setItem('token', res.token);
          },
          error: (err) => {
            this.errors = err.error;
            console.log(this.errors);
          },
        });
    } else {
      this.Form.markAllAsTouched();
    }
  }

  private redirect(role: string | undefined) {
    if (role == 'mentor') {
      this.router.navigate(['landing']);
    } else if (role == 'mentee') {
      this.router.navigate(['landing']);
    } else {
      this.router.navigate(['login']);
    }
  }


}
