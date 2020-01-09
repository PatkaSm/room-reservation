import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { LoginGuard } from './login/login.guard';
import { LoginService } from './login/login.service';
import { HomeGuard } from './home.guard';
import { HomeComponent } from './authorized/home/home.component';
import { ReservationComponent } from './authorized/reservation/reservation.component';
import { YourReservationsComponent } from './authorized/your-reservations/your-reservations.component';
import { ContactComponent } from './authorized/contact/contact.component';


const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [LoginGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'home', component: AuthorizedComponent, canActivate: [HomeGuard], children:[
    { path: '', redirectTo: 'feed', pathMatch: 'full' },
    {path: 'feed', component: HomeComponent, canActivate: [HomeGuard]},
    {path: 'reserve', component: ReservationComponent, canActivate: [HomeGuard]},
    {path: 'your-reservations', component: YourReservationsComponent, canActivate: [HomeGuard]},
    {path: 'contact', component: ContactComponent, canActivate: [HomeGuard]}
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
