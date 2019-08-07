import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = localStorage.getItem('validate');
        if (currentUser != undefined && currentUser.trim().length > 0) {
            // authorised so return true
            return true;
        }
        if (confirm("You are not authorised to access it.!  Do you want to create auth token ?")) {
            localStorage.setItem('validate', 'true');
        }
        else {

        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home']);
        return false;
    }
}