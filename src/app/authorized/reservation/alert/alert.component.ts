import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() chosenRoom;
  @Output() hideAlert = new EventEmitter();
  constructor(private reserveService: ReservationService, private router: Router) { }
  isFinished=false;
  alert= false;
  errorMsg;
  ngOnInit() {
  }
  confirm = () => {
    const data = {
      hour: this.chosenRoom.reservation_hour,
      date: this.chosenRoom.reservation_date,
      room: this.chosenRoom.room_id,
      is_cyclic: this.chosenRoom.reservation_type.is_cyclic,
      is_every_two_weekd: this.chosenRoom.reservation_type.is_every_two_weeks
    }
    this.reserveService.makeReservation(data).subscribe(response => {
      this.router.navigate(['home/your-reservations']);
    }, error => {
      this.alert = true;
      this.errorMsg = error.error.errors;
      throwError(error);
    })
  }
  goBack = () => {
    this.hideAlert.emit();
  }

}
