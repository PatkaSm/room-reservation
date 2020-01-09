import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationService } from './reservation.service';
import { throwError } from 'rxjs';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationTypes = ['Jednorazowa', 'Cykliczna', 'Cykliczna co dwa tyg'];
  hours = ['8:00', '9:45', '11:30', '13:15', '15:00', '16:45', '18:30'];
  equipmentList = ['Brak', 'Sterowniki', 'Pracownia fizyczna']
  reservationForm;
  results = [];
  alert = true;
  chosenRoom;
  constructor(private reserveService: ReservationService, public datepipe: DatePipe) { }

  ngOnInit() {
    this.reservationForm = new FormGroup({});
    this.reservationForm.addControl('reservationTypeField', new FormControl('Jednorazowa', [Validators.required]));
    this.reservationForm.addControl('hourFromField', new FormControl('8:00', [Validators.required]));
    this.reservationForm.addControl('hourToField', new FormControl('18:30', [Validators.required]));
    this.reservationForm.addControl('equipmentField', new FormControl('Brak', [Validators.required])),
      this.reservationForm.addControl('numberOfSeats', new FormControl('0', [Validators.required]));
    this.reservationForm.addControl('numberOfComputers', new FormControl('0', [Validators.required]));
    this.reservationForm.addControl('dateField', new FormControl(new Date(), [Validators.required]));
  }

  get reservationType() {
    if (this.reservationForm.get('reservationTypeField').value === 'Jednorazowa') {
      return { is_cyclic: false, is_every_two_weeks: false, value: 'Jednorazowa'}
    }
    else if (this.reservationForm.get('reservationTypeField').value === 'Cykliczna') {
      return { is_cyclic: true, is_every_two_weeks: false, value: 'Cykliczna'}
    }
    else if (this.reservationForm.get('reservationTypeField').value === 'Cykliczna co dwa tyg') {
      return { is_cyclic: true, is_every_two_weeks: true, value: 'Cykliczna co dwa tyg.'}
    }
    return null;
  }
  get hourFrom() {
    return this.reservationForm.get('hourFromField');
  }
  get hourTo() {
    return this.reservationForm.get('hourToField');
  }
  get equipment() {
    return this.reservationForm.get('equipmentField');
  }
  get numberOfSeats() {
    return this.reservationForm.get('numberOfSeats');
  }
  get numberOfComputers() {
    return this.reservationForm.get('numberOfComputers');
  }
  get date() {
    return this.reservationForm.get('dateField');
  }
  searchForRooms() {
    const data = {
      reservation_date: this.datepipe.transform(this.date.value, 'yyyy-MM-dd'),
      reservation_hour_from: this.hourFrom.value,
      reservation_hour_to: this.hourTo.value,
      number_of_seats: this.numberOfSeats.value,
      number_of_computers: this.numberOfComputers.value,
      additional_equipment: this.equipment.value
    }
    this.reserveService.getRooms(data).subscribe(response => {
      this.results = response.body;
    }, error => {
      throwError(error);
    });
  }
  hideAlert = (value = true) => {
    this.alert = value;
  }
  makeReservation = ({room_id, room}, hour, number_of_seats) => {
    this.chosenRoom = {
      room_id: room_id,
      room: room,
      reservation_type: this.reservationType,
      reservation_date: this.datepipe.transform(this.date.value, 'yyyy-MM-dd'),
      reservation_hour: hour,
      equipment: this.equipment.value,
      number_of_seats: number_of_seats
    }
    this.hideAlert(false);
  }
}
