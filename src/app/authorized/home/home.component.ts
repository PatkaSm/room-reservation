import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { throwError} from 'rxjs';
import { AdminService } from '../admin/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { default as configData } from 'src/app/config.js';


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
  detailsRendered = false;
  seasonRendered = false;
  message = 'Pomyślnie zapisano zmiany!';
  showMessage = false;
  isAdmin = false;
  seasonData;
  newSeasonForm = false;
  changePasswordForm;
  regExp = configData.passwordRegEx;

  ngOnInit() {
    this.homeService.getDetails().subscribe(response => {
      this.user = response.body;
      this.detailsRendered = true;
    }, error => {
      throwError(error);
    });
    this.adminService.isAdmin().subscribe(response => {
      this.isAdmin = true;
      this.adminService.getSeason().subscribe(response => {
        this.seasonData = response.body;
        this.seasonRendered = true;
      }, error => {
        throwError(error);
      });
    }, error => {
      this.isAdmin = false;
    });

    this.changePasswordForm = new FormGroup({});
    this.changePasswordForm.addControl('password', new FormControl('', [Validators.required, Validators.pattern(this.regExp), 
      Validators.minLength(8)]));
    this.changePasswordForm.addControl('repeatPassword', new FormControl('',
      [Validators.required, this.validateAreEqual.bind(this)]));
  }

  private validateAreEqual(fieldControl: FormControl) {
    return fieldControl.value === this.changePasswordForm.controls['password'].value ? null : {
      NotEqual: true
    };
  }
  get password() {
    return this.changePasswordForm.get('password');
  }
  get repeatPassword() {
    return this.changePasswordForm.get('repeatPassword');
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

  showNewSeasonForm = (value = true) => {
    this.newSeasonForm = value;
  }
  showSeasonMessage = () => {
    this.message = 'Pomyślnie dodano rok akademicki!';
    this.showMessage = true;
  }

  submitPassword = () => {
    this.showMessage = true;
    this.homeService.sendUserData({ password: this.password.value }).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
