import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterService } from './register/register.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { TokenInterceptor } from './login/token.interceptor';
import { LoginGuard } from './login/login.guard';
import { AuthorizedComponent } from './authorized/authorized.component';
import { HomeComponent } from './authorized/home/home.component';
import { ReservationComponent } from './authorized/reservation/reservation.component';
import { YourReservationsComponent } from './authorized/your-reservations/your-reservations.component';
import { ContactComponent } from './authorized/contact/contact.component';
import { AuthorizedService } from './authorized/authorized.service';
import { YourReservationsService } from './authorized/your-reservations/your-reservations.service';
import { ReservationService } from './authorized/reservation/reservation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { DatePipe } from '@angular/common';
import { AlertComponent } from './authorized/reservation/alert/alert.component';
import { DeleteAlertComponent } from './authorized/your-reservations/delete-alert/delete-alert.component';
import { AdminComponent } from './authorized/admin/admin.component';
import { HomeService } from './authorized/home/home.service';
import { AdminService } from './authorized/admin/admin.service';
import { UsersComponent } from './authorized/admin/users/users.component';
import { UsersService } from './authorized/admin/users/users.service';
import { DeleteUserAlertComponent } from './authorized/admin/users/delete-user-alert/delete-user-alert.component';
import { SetAdminAlertComponent } from './authorized/admin/users/set-admin-alert/set-admin-alert.component';
import { NewSeasonAlertComponent } from './authorized/home/new-season-alert/new-season-alert.component';
import { NewSeasonService } from './authorized/home/new-season-alert/new-season.service';
import { SetActiveAlertComponent } from './authorized/admin/users/set-active-alert/set-active-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    LoginComponent,
    AuthorizedComponent,
    HomeComponent,
    ReservationComponent,
    YourReservationsComponent,
    ContactComponent,
    AlertComponent,
    DeleteAlertComponent,
    AdminComponent,
    UsersComponent,
    DeleteUserAlertComponent,
    SetAdminAlertComponent,
    NewSeasonAlertComponent,
    SetActiveAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [DatePipe, RegisterService, LoginService,
    LoginGuard, AuthorizedService, YourReservationsService, ReservationService, AdminService, HomeService, UsersService, NewSeasonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
