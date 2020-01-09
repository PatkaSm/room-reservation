import { Component, OnInit } from '@angular/core';
import { YourReservationsService } from './your-reservations.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-your-reservations',
  templateUrl: './your-reservations.component.html',
  styleUrls: ['./your-reservations.component.css']
})
export class YourReservationsComponent implements OnInit {
  reservations = []
  constructor(private reserveService: YourReservationsService) { }

  ngOnInit() {
    this.reserveService.getDetails().subscribe(response => {
      this.reservations = response.body;
    }, error => {
      throwError(error);
    })
  }

}
