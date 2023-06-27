import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';
import { BusinessServiceService } from 'src/app/shared/services/business-service.service';
// Router
// BusinessServiceService
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  errors: [] = [];
  id = 0

  constructor(
    private bService: BusinessServiceService,
    private authService: AuthService,
    private router: Router
  ) {
    this.id = this.authService.getloggedUserId()
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]{5,50}$/)]),
      details: new FormControl('', [Validators.required, Validators.pattern(/^.{10,200}$/)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^([1-4][0-9]|50|10)$/)]),
      duration: new FormControl('', [Validators.required, Validators.pattern(/^[123]$/)]),
    });
  }



  get getTitle() {
    return this.form.controls['title']
  }

  get getDetails() {
    return this.form.controls['details']
  }

  get getPrice() {
    return this.form.controls['price']
  }


  get getDuration() {
    return this.form.controls['duration']
  }


  submit(e: Event) {
    e.preventDefault();
    if (this.form.status == 'VALID') {
      console.log(this.form.value)
      // this.form.value.id=this.id
      this.bService.createService(this.form.value).subscribe({
        next: (res) => {
          console.log(res)
          this.router.navigate(['/mentor/dashboard'])
        }
      })
    } else {
      console.log(this.form.errors)
      this.form.markAllAsTouched();
    }
  }
}
