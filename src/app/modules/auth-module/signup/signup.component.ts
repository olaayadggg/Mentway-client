import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    // test : Date = new Date();

    /**
   * ========================
   *   After signup success
   *    use (set) auth.service.loggedUser(user)
   *    use (set) auth.service.loggedUserToken(token)
   *
   */
    errors: any;
    myfile:any
    userRole:any="MENTEE"
    data: FormData = new FormData();
    form: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
   
      // mobile: new FormControl('', [
      //   Validators.required,
      //   Validators.pattern('^(011|012|010)([0-9]+){8}$'),
      // ]),
      image: new FormControl(null, [
        Validators.required,
        // imageValidator(1000000,['jpg','jpeg','png'])
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
        ),
      ]),
      password2: new FormControl('', [Validators.required]),
    });

    constructor(private auth: AuthService, private router: Router) {}

    get getEmail() {
      return this.form.controls['email'];
    }

    get getPassword() {
      return this.form.controls['password'];
    }

    get isLoggedIn() {
      return this.auth;
    }
    get getName() {
      return this.form.controls['name'];
    }


    get getImage() {
      return this.form.controls['image'];
    }
    get getPassword2() {
      return this.form.controls['password2'];
    }

    readUrl(event:any){
      console.log(event.target.files[0])
      this.myfile =event.target.files[0]
      const file = event.target.files[0]
      const type = file.type
      const validExt = ['image/jpeg','image/jpg','image/png']
      const size = file.size
      if (!validExt.includes(type)){
      return  this.getImage.setErrors({ ...(this.getImage.errors || {}), 'invalidExtension': 'invalid extension' })
      }
      if (size>2000000){
      return  this.getImage.setErrors({ ...(this.getImage.errors || {}), 'maxSize': 'max size exceeds 2 mb' })
      }
      return this.getImage.setErrors(null)
    }

    submit(e: Event) {

      e.preventDefault();
      if (this.form.status == 'VALID') {
        
        this.data.append('name', this.form.controls['name'].value);
        this.data.append('email', this.form.controls['email'].value);
        this.data.append('role', this.userRole);
        this.data.append('password', this.getPassword.value);
        this.data.append('password2', this.getPassword2.value);

        this.data.append('img_url', this.myfile);
        console.log(this.data)
        // this.auth.register(this.data).subscribe({
        //   next: (res: any) => {
        //     console.log(res);
        //     this.router.navigate(['/payment']);
        //   },
        //   error: (err) => {
        //     console.log(err);
        //     this.errors = err.error;
        //   },
        // });
      } else {
        this.form.markAllAsTouched();
      }

      console.log(this.data)
    }
setRole(role:any){
this.userRole=role;
}
}
