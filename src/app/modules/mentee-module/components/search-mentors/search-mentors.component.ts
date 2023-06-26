import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/modules/mentor-module/mentor-service/mentor.service';
import { CategoryService } from 'src/app/shared/services/category.service';
@Component({
  selector: 'app-search-mentors',
  templateUrl: './search-mentors.component.html',
  styleUrls: ['./search-mentors.component.css']
})
export class SearchMentorsComponent implements OnInit {
  categories: any = [];
  mentors: any = [];
  name: string = '';
  rate: string = '';
  categoryID: string = '';



  constructor(private categoryService:CategoryService, private mentorService:MentorService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((response)=>{this.categories=response; console.log(response)});
    this.mentorService.getAllMentors().subscribe((response)=>{this.mentors=response; console.log(response)});
  }

  searchAndFileration(): void {
    this.mentorService.getAllMentors().subscribe((response)=>{this.mentors=response; console.log(response)});
  }
}
