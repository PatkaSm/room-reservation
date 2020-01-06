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
import { ReserveComponent } from './authorized/reserve/reserve.component';
import { YourReservesComponent } from './authorized/your-reserves/your-reserves.component';
import { ContactComponent } from './authorized/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    LoginComponent,
    AuthorizedComponent,
    HomeComponent,
    ReserveComponent,
    YourReservesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [RegisterService, LoginService, LoginGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
