import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl: string = `${environment.API_URL}/api/v1`;
  stripe: any;
  constructor(private http: HttpClient) {
   
  }



  getUnPaid() {

    return this.http.get(`${this.baseUrl}/services/applications/unpaid`)
    // return this.stripe = await loadStripe(environment.stripeKey, { apiVersion: "2022-11-15" })
  }
  payMentor(appId:any) {

    return this.http.get(`${this.baseUrl}/services/pay/application/${appId}`)
    // return this.stripe = await loadStripe(environment.stripeKey, { apiVersion: "2022-11-15" })
  }
}
