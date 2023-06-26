import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/modules/mentor-module/mentor-service/mentor.service';
import { CategoryService } from 'src/app/shared/services/category.service';
@Component({
  selector: 'app-search-mentors',
  templateUrl: './search-mentors.component.html',
  styleUrls: ['./search-mentors.component.css']
})
export class SearchMentorsComponent implements OnInit {
  categories: any = [{name:'cat1', id:1}, {name:'cat2', id:2}, {name:'cat3', id:3}];
  mentors: any = [{name: "Hossam", rate:5, title:'JS Developer'}, {name: "Ahmed", rate:3, title:'PHP Developer'},{name: "Kasem", rate:2, title:'C++ Developer'},];
  name: string = '';
  rate: number = -1;
  categoryID: number = 0;



  constructor(private categoryService:CategoryService, private mentorService:MentorService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((response)=>{this.categories=response; console.log(response)});
    this.mentorService.getAllMentors().subscribe((response)=>{this.mentors=response; console.log(response)});
  }

  searchAndFileration(): void {
    console.log(this.name)
    console.log(Number(this.rate))
    console.log( Number(this.categoryID))
    if (this.name == '' && this.rate == -1 && this.categoryID == 0) {
      this.mentorService.getAllMentors().subscribe((response)=>{this.mentors=response; console.log(response)});
    }else{
      this.mentorService.getAllMentors(0, 5, this.name, Number(this.rate), Number(this.categoryID)).subscribe((response)=>{this.mentors=response; console.log(response)});
    }
  }
}
