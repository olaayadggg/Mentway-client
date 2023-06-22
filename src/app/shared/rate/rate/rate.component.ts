import { Component, OnInit,Input, Output, EventEmitter, ViewEncapsulation, Directive  } from '@angular/core';
import { MentorService } from 'src/app/modules/mentor-module/mentor-service/mentor.service';
@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class RateComponent implements OnInit {
  @Input() id: any
  @Input() userRate: any = null
  
  @Input() avg_rate: any=null
  max = 5;
  rate = 0;
  @Input() isReadonly:boolean = false;

  constructor(private mentorService: MentorService) {
  }
  ngOnInit(): void {
    if (this.userRate) {
      this.rate = this.userRate.rate
    }
    if (this.avg_rate){
      this.rate=this.avg_rate
    }
  }

  rateMentor() {
    // if(!this.userRate){
    //   this.mentorService.rate(Number(this.id), this.rate).subscribe(
    //     {
    //       next: (res) => {
    //         console.log(res);
    //       },
    //       error: (err) => {
    //         console.log(err);
    //       }
    //     }
    //   )
    // }else{
    //   this.mentorService.rateUpdate(Number(this.userRate.id),Number(this.id), this.rate).subscribe(
    //     {
    //       next: (res) => {
    //         console.log(res);
    //       },
    //       error: (err) => {
    //         console.log(err);
    //       }
    //     }
    //   )
    // }
  }
}
