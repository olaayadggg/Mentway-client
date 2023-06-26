import { Component, OnInit } from '@angular/core';
import { MentorService } from '../../mentor-service/mentor.service';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';
// AuthService
// MentorService
@Component({
  selector: 'app-profile-mentor',
  templateUrl: './profile-mentor.component.html',
  styleUrls: ['./profile-mentor.component.css']
})
export class ProfileMentorComponent implements OnInit {
id=0;
data:any={}
  constructor(private mentorService:MentorService,private authService:AuthService) {
    this.id=this.authService.getloggedUserId()
   }

  ngOnInit(): void {
    this.mentorService.getMentorById(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.data=res;
      }
    })
  }

}
