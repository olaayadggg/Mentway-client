import { Component } from '@angular/core';

@Component({
  selector: 'app-rate-after-call',
  templateUrl: './rate-after-call.component.html',
  styleUrls: ['./rate-after-call.component.css']
})
export class RateAfterCallComponent {

  stars = [1, 2, 3, 4, 5];
  highlightedStars = 0;
  rating = 0;

  // this function sets the color the stars to gold after mouseout
  highlightStars(starIndex: number) {
    this.highlightedStars = starIndex;
  }
  
  // this function sets back the color the stars to white after mouseout
  resetStars() {
    this.highlightedStars = 0;
  }

  // this function gets the rating the mentee clicked in the web page from 1 to 5
  setRating(starIndex: number) {
    this.rating = starIndex;
  }

  // this is the dumpy data, I used, in the form (not all the data).
  row = {
      "mentor": 'Mentor 1',
      "profile-pic": './assets/img/theme/team-1-800x800.jpg',
      "rating": 5,
      "scheduledDate2": 'HTML',
    };
}
