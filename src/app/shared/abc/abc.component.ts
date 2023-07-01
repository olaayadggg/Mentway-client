
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {
  receivedData: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log("router------------",this.router.getCurrentNavigation()?.extras.state);
  }
  
  ngOnInit() {
    
    console.log('history------: ',history.state);
    // this.product = history.state;
  }
}
