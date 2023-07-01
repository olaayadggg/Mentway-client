import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../services/payment.service';
// import { CategoryService } from '../services/category.service';
// PaymentService
@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  errors:[]=[];
  clientSectert:any;
  paymentHandler: any = null;
  stripeElemnts:any
  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {

    this.paymentService.createPayment().subscribe({
      next:(res:any)=>{
        this.clientSectert = res?.clientSecret;
        console.log(res?.clientSecret)
        this.testStripe(res?.clientSecret)
      },error:(err)=>{
        console.log(err)
      }

    })






    // this.invokeStripe();
// this.v.getAllCategories().subscribe({next:(res)=>{console.log(res)}})
    // this.form = new FormGroup({
    //   cardHolder: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]{5,50}$/)]),
    //   // cardNumber: new FormControl('', [Validators.required, Validators.pattern(/^4[0-9]{12}(?:[0-9]{3})?$/)]),
    //   cardNumber: new FormControl('', [Validators.required, Validators.pattern(/\d{14}$/)]),
    //   expirDate: new FormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    //   CVC: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}$/)]),
    // });
  }

  testStripe(secret:any) {
    const options = {
      clientSecret: `${secret}`,
      // Fully customizable with appearance API.
      // appearance: {/*...*/ },

    };

     this.stripeElemnts = this.paymentService.stripe.elements(options);

    // Create and mount the Payment Element
    const paymentElement = this.stripeElemnts.create('payment');
    paymentElement.mount('#payment-element');
  }


  // form.addEventListener('submit', async (event) => {



  async submit(event:any){
    event.preventDefault();

    const { error } = await this.paymentService.stripe.confirmPayment({
      elements:this.stripeElemnts,
      confirmParams: {
        return_url: "http://localhost:4200/payment/status",
      },
    });

    if (error) {
      console.log(error)
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      // const messageContainer = document.querySelector('#error-message');
      // messageContainer.textContent = error.message;
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }

  }
  
}