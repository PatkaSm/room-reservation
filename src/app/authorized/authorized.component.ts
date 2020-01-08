import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { AuthorizedService } from './authorized.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {
  userName = '';
  constructor(private loginService: LoginService, private router: Router, private authorizedService: AuthorizedService) { }

  ngOnInit() {
    this.authorizedService.getName().subscribe(response =>{
      this.userName = response.body.first_name;
    }, error => {
      console.log(error);
    })
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['']);
  }
}
