import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import {default as configData } from 'src/app/config.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  success = false;
  failed = false;
  public registerForm: FormGroup;
  userExists = false;
  userExistsError = 'User with this email already exists.';
  regExp = configData.passwordRegEx;
  constructor(public registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({});
    this.registerForm.addControl('firstName', new FormControl('', [Validators.required, Validators.minLength(4)]));
    this.registerForm.addControl('lastName', new FormControl('', [Validators.required, Validators.minLength(4)]));
    this.registerForm.addControl('email', new FormControl('', [Validators.required, Validators.email]));
    this.registerForm.addControl('password', new FormControl('', [Validators.required, Validators.pattern(this.regExp)])),
    this.registerForm.addControl('repeatPassword', new FormControl('', [Validators.required, this.validateAreEqual.bind(this)]));
    this.registerForm.addControl('role', new FormControl('', []));
  }

  private validateAreEqual(fieldControl: FormControl) {
    return fieldControl.value === this.registerForm.controls['password'].value ? null : {
      NotEqual: true
    };
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get repeatPassword() {
    return this.registerForm.get('repeatPassword');
  }

  get data() {
    return {
      first_name: this.firstName.value,
      last_name: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
    };
  }
  submitRegister() {
    this.registerService.registerUser(this.data).subscribe(
      response => {
        response.status === 201 ? this.userExists = false : this.userExists = true;
        this.success = true;
        this.failed = false;
      },
      error => {
        error.status === 406 ? this.userExists = true : this.userExists = false;
        this.success = false;
        this.failed = true;
      });  
  }

}
