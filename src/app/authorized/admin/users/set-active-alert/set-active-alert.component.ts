import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-set-active-alert',
  templateUrl: './set-active-alert.component.html',
  styleUrls: ['./set-active-alert.component.css']
})
export class SetActiveAlertComponent implements OnInit {
  @Input() chosenUserId;
  @Output() refresh = new EventEmitter();
  @Output() hideAlert = new EventEmitter();
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }
  setActive = () => {
    this.usersService.setActive(this.chosenUserId).subscribe(response => {
      this.hideAlert.emit();
      this.refresh.emit();
    }, error => {
      throwError(error);
    })
  }
}
