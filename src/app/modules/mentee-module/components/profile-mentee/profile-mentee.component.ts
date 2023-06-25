import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenteeService } from '../../mentee-service/mentee.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-mentee',
  templateUrl: './profile-mentee.component.html',
  styleUrls: ['./profile-mentee.component.css']
})
export class ProfileMenteeComponent implements OnInit {
  id:number=10;
  MyData:any|null=null;
  constructor(private active:ActivatedRoute, private service:MenteeService){
    this.id=Number(this.active.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.service.getMenteeById(9).subscribe({
      next:(response)=>{console.log(response);
      this.MyData=response
      // this.MyData.imgUrl=environment.API_URL.concat(this.MyData.picture)
      },
    });
  }

}
