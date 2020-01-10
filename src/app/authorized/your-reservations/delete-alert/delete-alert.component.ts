import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YourReservationsService } from '../your-reservations.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.css']
})
export class DeleteAlertComponent implements OnInit {
  @Input() chosenReservation;
  @Output() hideAlert = new EventEmitter();
  @Output() refresh = new EventEmitter();
  @Output() msg = new EventEmitter();
  reservation;
  constructor(private reserveService: YourReservationsService) { }

  ngOnInit() {
  }


  deleteReservation() {
    this.reserveService.deleteReservation(this.chosenReservation).subscribe(response => {
      this.hideAlert.emit();
      this.refresh.emit();
      this.msg.emit();
    }, error => {
      throwError(error);
    });

  }



  goBack() {
    this.hideAlert.emit();
  }

}
