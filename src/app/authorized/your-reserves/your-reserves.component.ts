import { Component, OnInit } from '@angular/core';
import { YourReservesService } from './your-reserves.service';

@Component({
  selector: 'app-your-reserves',
  templateUrl: './your-reserves.component.html',
  styleUrls: ['./your-reserves.component.css']
})
export class YourReservesComponent implements OnInit {
  reservations = []
  constructor(private reserveService: YourReservesService) { }

  ngOnInit() {
    this.reserveService.getDetails().subscribe(response => {
      this.reservations = response.body;
      console.log(response.body);
    })
  }

}
