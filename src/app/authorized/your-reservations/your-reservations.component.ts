import { Component, OnInit } from '@angular/core';
import { YourReservationsService } from './your-reservations.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-your-reservations',
  templateUrl: './your-reservations.component.html',
  styleUrls: ['./your-reservations.component.css']
})
export class YourReservationsComponent implements OnInit {
  reservations = [];
  showAlert = false;
  chosenReservationId;
  message = false;
  success = 'Pomyślnie usunięto rezerwację';
  constructor(private reserveService: YourReservationsService) { }

  ngOnInit() {
    this.reserveService.getDetails().subscribe(response => {
      this.reservations = response.body;
    }, error => {
      throwError(error);
    });
  }

  hideAlert = (value = false) => {
    this.showAlert = value;
  }

  showMessage = () => {
    this.message = true;
  }

  delete(value = true, id) {
    this.chosenReservationId = id;
    this.hideAlert(value);
  }



}
