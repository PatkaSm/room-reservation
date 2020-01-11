import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService, private adminService: AdminService, private router: Router) { }
  results = [];
  showedUsers = [];
  filterValue = '';
  deleteAlert = false;
  adminAlert = false;
  chosenUserId;
  ngOnInit() {
    this.adminService.isAdmin().subscribe(response => {

    }, error => {
      this.router.navigate(['home']);
    });
    this.usersService.getUsers().subscribe(response => {
      this.results = response.body;
      this.showedUsers = response.body;
    }, error => {
      throwError(error);
    });
  }

  filter(event: any) {
    if (this.filterValue != '') {
      const wholeString = this.filterValue.toUpperCase();
      this.showedUsers = [];
      for (let i = 0; i < this.results.length; i++) {
        if (this.results[i].first_name.toUpperCase().includes(wholeString)
          || this.results[i].last_name.toString().toUpperCase().includes(wholeString)
          || this.results[i].email.toUpperCase().includes(wholeString) 
          || this.results[i].is_admin.toString().toUpperCase().includes(wholeString)) {
            this.showedUsers.push(this.results[i]);
        }
      }
    }
    else{
      this.showedUsers = this.results;
    }
  }
  showDeleteAlert = (value = true, id) => {
    this.deleteAlert = value;
    this.chosenUserId = id;
  }
  showAdminAlert = (value = true, id) => {
    this.adminAlert = value;
    this.chosenUserId = id;
  }

}
