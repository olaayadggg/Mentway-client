import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {
  myQueryParam!: string;
  myIntent!: string;
  // myQueryParam
  data: string = '';
  color: string = '';
  role: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService,
    private authService: AuthService,
  ) {
    this.role = this.authService.getloggedUserRole()
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.myQueryParam = params['payment_intent_client_secret'];
      this.myIntent = params['payment_intent'];
      console.log(params['payment_intent_client_secret'])
    });

    this.test();
  }

  // payment_intent	

  test() {
    this.paymentService.stripe.retrievePaymentIntent(this.myQueryParam).then((myIntent: any) => {
      // const message = document.querySelector('#message')

      // Inspect the PaymentIntent `status` to indicate the status of the payment
      // to your customer.
      //
      // Some payment methods will [immediately succeed or fail][0] upon
      // confirmation, while others will first enter a `processing` state.
      //
      // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
      // console.log("intent: -------------- ",myIntent)
      if (myIntent?.paymentIntent?.status === 'succeeded') {
        this.paymentService.setValidPayment(myIntent?.paymentIntent?.id).subscribe({
          next: (res: any) => {
            console.log(res)
          }
        })
        this.data = 'Success! Payment received.'
        this.color = 'success'
        // console.log("Success! Payment received.")

      } else if (myIntent?.paymentIntent?.status === 'processing') {
        this.data = "Payment processing.We'll update you when payment is received."
        this.color = 'warning'
        // console.log("Payment processing.We'll update you when payment is received.")
      } else if (myIntent?.paymentIntent?.status === "requires_payment_method") {
        this.data = "Payment failed. Please try another payment method."
        this.color = 'danger'
        // console.log("Payment failed. Please try another payment method.")
      }
      else {
        this.data = "Something wnent wrong!"
        this.color = 'danger'
        // console.log("worng")
      }
      this.authService.setValidPayment()
      setTimeout(() => {

        this.router.navigate([`/${this.role.toLocaleLowerCase()}/dashboard`])

      }, 3000)
    });
  }
}
