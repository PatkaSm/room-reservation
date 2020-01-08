import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) { }
  user;
  rendered = false;
  ngOnInit() {
    this.homeService.getDetails().subscribe(response => {
      this.user = response.body;
      this.rendered = true;
    }, error => {
      throwError(error);
    });
  }

}
