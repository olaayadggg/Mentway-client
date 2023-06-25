import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  errors:[]=[];
  

  constructor(){

  }
  ngOnInit(): void {
// this.v.getAllCategories().subscribe({next:(res)=>{console.log(res)}})
    this.form = new FormGroup({
      cardHolder: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]{5,50}$/)]),
      // cardNumber: new FormControl('', [Validators.required, Validators.pattern(/^4[0-9]{12}(?:[0-9]{3})?$/)]),
      cardNumber: new FormControl('', [Validators.required, Validators.pattern(/\d{14}$/)]),
      expirDate: new FormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
      CVC: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}$/)]),
    });
  }


  get getCardHolder(){
    return this.form.controls['cardHolder']
  }

  get getCardNumber() {
    return this.form.controls['cardNumber']
  }

  get getExpirDate() {
    return this.form.controls['expirDate']
  }


  get getCVC() {
    return this.form.controls['CVC']
  }

  submit(e:Event){
    e.preventDefault();
    if (this.form.status == 'VALID') {
     console.log(this.form.value)
    } else {
      console.log(this.form.errors)
      this.form.markAllAsTouched();
    }
  }
}
