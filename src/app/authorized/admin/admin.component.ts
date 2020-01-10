import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }
  reservations = []
  showedReservations = [];
  showAlert = false;
  chosenReservationId;
  message = false;
  success = 'Pomyślnie usunięto rezerwację';
  filterValue = '';
  ngOnInit() {
    this.adminService.isAdmin().subscribe(response => {

    }, error => {
      this.router.navigate(['home']);
    });
    this.adminService.getReservations().subscribe(response => {
      this.reservations = response.body;
      this.showedReservations = response.body;
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
  filter(event: any) {
    if (this.filterValue != '') {
      const wholeString = this.filterValue.toUpperCase();
      this.showedReservations = [];
      for (let i = 0; i < this.reservations.length; i++) {
        if (this.reservations[i].user_email.toUpperCase().includes(wholeString)
          || this.reservations[i].room_number.toString().toUpperCase().includes(wholeString)
          || this.reservations[i].room_wing.toUpperCase().includes(wholeString)
          || this.reservations[i].date.toUpperCase().includes(wholeString)
          || this.reservations[i].hour.toUpperCase().includes(wholeString)) {
            this.showedReservations.push(this.reservations[i]);
        }
      }
    }
    else{
      this.showedReservations = this.reservations;
    }
  }


}
