import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { default as configData } from 'src/app/config';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordRegex = configData.passwordRegEx;
  wrongCredentials = false;
  accountInactive = false;
  public loginForm: FormGroup;
  constructor(public loginService: LoginService, private router: Router, private route: ActivatedRoute) {
    this.loginForm = new FormGroup({});
    this.loginForm.addControl('email', new FormControl('', [Validators.email]));
    this.loginForm.addControl('password', new FormControl('', [Validators.email]));
  }


  ngOnInit() {

  }

  get email() {
    return this.loginForm.get('email').value;
  }
  get password() {
    return this.loginForm.get('password').value;
  }
  get data() {
    return {
      username: this.email,
      password: this.password
    };
  }
  submitLogin() {
    this.loginService.login(this.data).subscribe(response => {
      this.loginService.doLoginUser(response);
      this.wrongCredentials = false;
      this.accountInactive = false;
      this.router.navigate(['home']);
    }, error => {
      if (error.status === 406) {
        this.wrongCredentials = false;
        this.accountInactive = true;
      }
      else {
        this.wrongCredentials = true;
        this.accountInactive = false;
      }
    }
    );
  }

}
