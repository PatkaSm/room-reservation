import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-set-admin-alert',
  templateUrl: './set-admin-alert.component.html',
  styleUrls: ['./set-admin-alert.component.css']
})
export class SetAdminAlertComponent implements OnInit {
  @Input() chosenUserId;
  @Output() refresh = new EventEmitter();
  @Output() hideAlert = new EventEmitter();
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }
  setAdmin = () => {
    this.usersService.setAdmin(this.chosenUserId).subscribe(response => {
      this.hideAlert.emit();
      this.refresh.emit();
    }, error => {
      console.log(error);
    })
  }
}
