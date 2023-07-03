import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Stripe, loadStripe } from '@stripe/stripe-js';

// Stripe
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl: string = `${environment.API_URL}/api/v1`;
  stripe: any;
  constructor(private http: HttpClient) {
    this.createStripeobject()
   }
  createPayment() {
    return this.http.post(`${this.baseUrl}/payments/create`, {})
  }
  
  async createStripeobject() {
    this.stripe = await loadStripe(environment.stripeKey, { apiVersion: "2022-11-15" })
  }
  
  setValidPayment(intentId:any){
    
    return this.http.get(`${this.baseUrl}/payments/valid?pamentIntentId=${intentId}`)
    // return this.stripe = await loadStripe(environment.stripeKey, { apiVersion: "2022-11-15" })
  }
  
  addPayemntToMentor(mentorId:any){
    return this.http.get(`${this.baseUrl}/payments/validate/mentor`)
  }
}
