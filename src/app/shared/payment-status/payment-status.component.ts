import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../services/payment.service';
@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {
  myQueryParam!: string;
  myIntent!: string;
  // myQueryParam

  constructor(private route: ActivatedRoute,
    private paymentService:PaymentService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.myQueryParam = params['payment_intent_client_secret'];
      this.myIntent = params['payment_intent'];
      console.log(params['payment_intent_client_secret'])
    });

    this.test();
  }

  // payment_intent	

  test(){
    this.paymentService.stripe.retrievePaymentIntent(this.myQueryParam).then((myIntent:any) => {
      // const message = document.querySelector('#message')

      // Inspect the PaymentIntent `status` to indicate the status of the payment
      // to your customer.
      //
      // Some payment methods will [immediately succeed or fail][0] upon
      // confirmation, while others will first enter a `processing` state.
      //
      // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
      console.log("intent: -------------- ",myIntent)
      if (myIntent?.paymentIntent?.status ==='succeeded'){

        console.log("Success! Payment received.")
        
      } else if (myIntent?.paymentIntent?.status ==='processing'){

        console.log("Payment processing.We'll update you when payment is received.")
      } else if (myIntent?.paymentIntent?.status ==="requires_payment_method"){

        console.log("Payment failed. Please try another payment method.")
      }
      else{
        console.log("worng")
      }
      // switch (myIntent?.status) {
      //   case "succeeded":
      //     // message.innerText = 'Success! Payment received.';
      //     break;

      //   case 'processing':
      //     // message.innerText = "Payment processing. We'll update you when payment is received.";
      //     break;

      //   case 'requires_payment_method':
      //     // message.innerText = 'Payment failed. Please try another payment method.';
      //     // Redirect your user back to your payment page to attempt collecting
      //     // payment again
      //     break;

      //   default:
      //     console.log("worng")
      //     // message.innerText = 'Something went wrong.';
      //     break;
      // }
    });
  }
}
