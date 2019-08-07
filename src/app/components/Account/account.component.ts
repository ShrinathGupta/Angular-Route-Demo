import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  constructor(
    private router: Router
  ) { }

  removeToken() {
    localStorage.removeItem('validate');
    this.router.navigate(['/home']);
  }
}
