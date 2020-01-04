import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { LoginGuard } from './login/login.guard';
import { LoginService } from './login/login.service';
import { HomeGuard } from './home.guard';


const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [LoginGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'authorized', component: AuthorizedComponent, canActivate: [HomeGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
