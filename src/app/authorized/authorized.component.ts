import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { AuthorizedService } from './authorized.service';
import { AdminService } from './admin/admin.service';

@Component({
  selector: 'app-authorized',
  templateUrl:'./authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {
  userName = '';
  isAdmin  = false;
  constructor(private loginService: LoginService, private router: Router, 
    private authorizedService: AuthorizedService, private adminService: AdminService) { }

  ngOnInit() {
    this.authorizedService.getName().subscribe(response => {
      this.userName = response.body.first_name;
    }, error => {
      console.log(error);
    });
    this.adminService.isAdmin().subscribe(response => {
      this.isAdmin = true;
    }, error => {
      this.isAdmin = false;
    });
  }
  logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }
}
