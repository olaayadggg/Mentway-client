import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/modules/mentor-module/mentor-service/mentor.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-mentors',
  templateUrl: './search-mentors.component.html',
  styleUrls: ['./search-mentors.component.css']
})

export class SearchMentorsComponent implements OnInit {
  categories: any = [];
  mentors: []|any = [];
  name: string = '';
  rate: number | undefined = undefined;
  categoryID: undefined = undefined;
  placeholder: any = "Search in Mentors by name ";
  totalItems = 0;
  itemsPerPage = 0;
  currentPage = 1;

  constructor(private categoryService: CategoryService, private mentorService: MentorService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((response) => { this.categories = response; console.log(response) });
    this.search(0, 'm', this.rate, this.categoryID)

  }

  search(page = 0, name: string, rate: number | undefined = undefined, catId: number | undefined = undefined): void {
    this.mentorService.getAllMentors(page, 5, name, rate, catId)
      .subscribe({
        next: (response:any) => {
          this.mentors = response?.content;
          this.totalItems = response?.totalElements
          this.itemsPerPage = response?.size
          this.currentPage = response?.number
          console.log(response)
        },
        error:(err)=>{
          console.log(err)
        }
      });

  }
  myform: FormGroup = new FormGroup({
    value: new FormControl('', [Validators.required]),
  });
  get getSearchValue() {
    return this.myform.controls['value'];
  }
  //   this.totalItems = res?.totalElements
  // this.itemsPerPage = res?.size
  // this.currentPage = res?.number
  // this.rows = res?.content



  submit(e: Event) {
    e.preventDefault();
    if (this.myform.status == 'VALID') {
      console.log("sdadas", this.getSearchValue.value)
      this.search(0, this.getSearchValue.value, this.rate, this.categoryID)
    } else {
      this.placeholder = 'type mentor name '
      this.myform.markAllAsTouched();
    }
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    // call your api with page number
    console.log("fetch page: ", this.currentPage)

    this.search(page, this.getSearchValue.value, this.rate, this.categoryID)


  }
}
