import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-delete-user-alert',
  templateUrl: './delete-user-alert.component.html',
  styleUrls: ['./delete-user-alert.component.css']
})
export class DeleteUserAlertComponent implements OnInit {
  @Input() chosenUserId;
  @Output() refresh = new EventEmitter();
  @Output() hideAlert = new EventEmitter();
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }
  deleteUser = () => {
    this.usersService.deleteUser(this.chosenUserId).subscribe(response => {
      this.hideAlert.emit();
      this.refresh.emit();
    }, error => {
      throwError(error);
    })
  }
}
