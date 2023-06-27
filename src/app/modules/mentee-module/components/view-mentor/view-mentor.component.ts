import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { MentorService } from 'src/app/modules/mentor-module/mentor-service/mentor.service';
// MentorService
@Component({
  selector: 'app-view-mentor',
  templateUrl: './view-mentor.component.html',
  styleUrls: ['./view-mentor.component.css']
})
export class ViewMentorComponent implements OnInit {
  id:number=0;
  mentor:any={}
  constructor(
    private activatedRoute:ActivatedRoute,
    private mentorService:MentorService,
    ){
   this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
}
  ngOnInit(): void {
   this.mentorService.getMentorById(this.id).subscribe({
    next:(res:any)=>{
      this.mentor=res;
      console.log(res)
    }
   })
  }

}
