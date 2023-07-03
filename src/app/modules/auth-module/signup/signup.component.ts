import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';
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
  myfile: any
  userRole: any = "MENTEE"
  categories:any[]=[]
  data: FormData = new FormData();
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    coverLetter: new FormControl('type your cover letter', []),
    categoryId: new FormControl('type your cover letter', []),

    image: new FormControl(null, [
      Validators.required,
      // imageValidator(1000000,['jpg','jpeg','png'])
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
    ]),
    // password2: new FormControl('', [Validators.required]),
  });

  constructor(
    private auth: AuthService, private router: Router,
    private catService:CategoryService,
    ) {
    this.catService.getAllCategories().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.categories=res;
      }
    })
    // if( this.userRole==="MENTOR"){
    //   this.form.addControl("coverLetter", new FormControl('', [Validators.required]),)
    // }
   }

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
  get getCoverLetter() {
    return this.form.controls['coverLetter'];
  }

  get getImage() {
    return this.form.controls['image'];
  }

  get getCategoryId() {
    return this.form.controls['categoryId'];
  }

  readUrl(event: any) {
    console.log(event.target.files[0])
    this.myfile = event.target.files[0]
    const file = event.target.files[0]
    const type = file.type
    const validExt = ['image/jpeg', 'image/jpg', 'image/png']
    const size = file.size
    if (!validExt.includes(type)) {
      return this.getImage.setErrors({ ...(this.getImage.errors || {}), 'invalidExtension': 'invalid extension' })
    }
    if (size > 2000000) {
      return this.getImage.setErrors({ ...(this.getImage.errors || {}), 'maxSize': 'max size exceeds 2 mb' })
    }
    return this.getImage.setErrors(null)
  }

  submit(e: Event) {

    e.preventDefault();
    if (this.form.status == 'VALID') {

      this.data.append('name', this.form.controls['name'].value);
      this.data.append('email', this.form.controls['email'].value);
      // this.data.append('role', this.userRole);
      this.data.append('password', this.getPassword.value);
      // this.data.append('password2', this.getPassword2.value);
      if (this.userRole == "MENTOR"){
        this.data.append('coverLetter', this.getCoverLetter.value);
        this.data.append('categoryId', this.getCategoryId.value);
      }
        this.data.append('img', this.myfile);
      console.log(this.data)
      if(this.userRole=="MENTOR"){
        this.auth.registerMentor(this.data).subscribe({
          next: (res: any) => {
            console.log(res);
            this.auth.setloggedUser(res)
            this.auth.setloggedUserToken(res.jwt);
            this.auth.setIsloggedIn(true)
            this.router.navigate(['/landing']);
          },
          error: (err) => {
            console.log(err);
            this.errors = err.error;
          },
        });
      }else{
        this.auth.registerMentee(this.data).subscribe({
          next: (res: any) => {
            console.log(res);
            this.auth.setloggedUser(res)
            this.auth.setloggedUserToken(res.jwt);
            this.auth.setIsloggedIn(true)
            this.router.navigate(['/landing']);
          },
          error: (err) => {
            console.log(err);
            this.errors = err.error;
          },
        });

      }
      
    } else {
      this.form.markAllAsTouched();
    }

    console.log(this.data)
  }
  setRole(role: any) {
    this.userRole = role;
  }
}
