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
    AlertComponent
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
  providers: [DatePipe, RegisterService, LoginService, LoginGuard, AuthorizedService, YourReservationsService, ReservationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
