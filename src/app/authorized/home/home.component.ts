import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { throwError } from 'rxjs';
import { AdminService } from '../admin/admin.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService, private adminService: AdminService) { }
  firstNameField = false;
  lastNameField = false;
  emailField = false;
  phoneNumberField = false;
  roomNumberField = false;
  consultationsField = false;
  showPasswordField = false;
  user;
  rendered = false;
  message = 'Pomyślnie zapisano zmiany!';
  showMessage = false;
  isAdmin = false;
  seasonData;
  ngOnInit() {
    this.homeService.getDetails().subscribe(response => {
      this.user = response.body;
      this.rendered = true;
    }, error => {
      throwError(error);
    });
    this.adminService.isAdmin().subscribe(response => {
      this.isAdmin = true;
      this.adminService.getSeason().subscribe(response => {
        this.seasonData = response.body;
      }, error => {
        throwError(error);
      });
    }, error => {
      this.isAdmin = false;
    });
  }

  editFirstName() {
    this.firstNameField = !this.firstNameField;
  }

  sendFirstName = () => {
    this.editFirstName();
    this.showMessage = true;
    this.homeService.sendUserData({first_name: this.user.first_name}).subscribe(response => {
      this.ngOnInit();
    }, error => {
        throwError(error);
    });
  }

  editLastName() {
    this.lastNameField = !this.lastNameField;
  }

  sendLastName() {
    this.editLastName();
    this.showMessage = true;
    this.homeService.sendUserData({last_name: this.user.last_name}).subscribe(Response => {
      this.ngOnInit();
    }, error => {
      throwError(error);
    });
  }

  editEmail() {
    this.emailField = !this.emailField;
  }

  sendEmail() {
    this.editEmail();
    this.showMessage = true;
    this.homeService.sendUserData({email: this.user.email}).subscribe(Response => {
      this.ngOnInit();
    }, error => {
      throwError(error);
    });

  }

  editPhoneNumber() {
    this.phoneNumberField = !this.phoneNumberField;
  }

  sendPhoneNumber() {
    this.editPhoneNumber();
    this.showMessage = true;
    this.homeService.sendUserData({phone_number: this.user.phone_number}).subscribe(Response => {
      this.ngOnInit();
    }, error => {
      throwError(error);
    });
  }

  editRoomNumber() {
    this.roomNumberField = !this.roomNumberField;
  }

  sendRoomNumber() {
    this.editRoomNumber();
    this.showMessage = true;
    this.homeService.sendUserData({room_number: this.user.room_number}).subscribe(Response => {
      this.ngOnInit();
    }, error => {
      throwError(error);
    });
  }

  editConsultations() {
    this.consultationsField = !this.consultationsField;
  }

  sendConsultations() {
    this.editConsultations();
    this.showMessage = true;
    this.homeService.sendUserData({consultations: this.user.consultations}).subscribe(Response => {
      this.ngOnInit();
    }, error => {
      throwError(error);
    });
  }

  showPassword(){
    this.showPasswordField = !this.showPasswordField;
  }

  savePassword(){

  }

}
