import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenteeService {
  private baseUrl:string=`${environment.API_URL}/api`
  private service: any;
  constructor(private http:HttpClient) {}

  setData(data: any) {
    this.service = data;
  }

  getData(): any {
    return this.service;
  }


  setStartDate():any{

  }
  SetApplicationDetails():any{


  }
}
