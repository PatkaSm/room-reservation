import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
    providedIn: 'root'
})
export class HomeGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) { }
    canActivate(): boolean {
        if (this.loginService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['']);
            return false;
        }
    }
}
