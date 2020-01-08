import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReserveService } from './reserve.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  reservationTypes = ['Jednorazowa', 'Cykliczna', 'Cykliczna co dwa tyg'];
  hours = ['8:00', '9:45', '11:30', '13:15', '15:00', '16:45', '18:30'];
  equipmentList = ['Brak', 'Sterowniki', 'Pracownia fizyczna']
  reservationForm;
  results = [];
  constructor(private reserveService: ReserveService) { }

  ngOnInit() {
    this.reservationForm = new FormGroup({});
    this.reservationForm.addControl('reservationTypeField', new FormControl('', [Validators.required]));
    this.reservationForm.addControl('hourFromField', new FormControl('', [Validators.required]));
    this.reservationForm.addControl('hourToField', new FormControl('', [Validators.required]));
    this.reservationForm.addControl('equipmentField', new FormControl('', [Validators.required])),
      this.reservationForm.addControl('numberOfSeats', new FormControl('', [Validators.required]));
    this.reservationForm.addControl('numberOfComputers', new FormControl('', [Validators.required]));
    this.reservationForm.addControl('dateField', new FormControl('', [Validators.required]));
  }

  get reservationType() {
    if (this.reservationForm.get('reservationTypeField').value === 'Jednorazowa') {
      return { is_cyclic: false, is_every_two_weeks: false }
    }
    else if (this.reservationForm.get('reservationTypeField').value === 'Cykliczna'){
      return { is_cyclic: true, is_every_two_weeks: false }
    }
    else if (this.reservationForm.get('reservationTypeField').value === 'Cykliczna co dwa tyg'){
      return { is_cyclic: true, is_every_two_weeks: true }
    }
    return null;
  }
  get hourFrom() {
    return this.reservationForm.get('hourFromField').value;
  }
  get hourTo() {
    return this.reservationForm.get('hourToField').value;
  }
  get equipment() {
    return this.reservationForm.get('equipmentField').value;
  }
  get numberOfSeats() {
    return this.reservationForm.get('numberOfSeats').value;
  }
  get numberOfComputers() {
    return this.reservationForm.get('numberOfComputers').value;
  }
  get date() {
    return this.reservationForm.get('dateField').value;
  }
  searchForRooms() {
    const data = {
      'reservation_date': this.date,
      'reservation_hour_from': this.hourFrom,
      'reservation_hour_to': this.hourTo,
      'number_of_seats': this.numberOfSeats,
      'number_of_computers': this.numberOfComputers,
      'additional_equipment': this.equipment
    }
    this.reserveService.getRooms(data).subscribe(response => {
      console.log(response.body);
      this.results = response.body;
    }, error => {
      console.log(this.hourFrom);
      console.log(error);
      throwError(error);
    });
  }

}
