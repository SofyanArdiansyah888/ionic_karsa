import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(): boolean | UrlTree {
    const value = this.auth.isAuthenticated();
    if (!value) {
      return this.router.parseUrl('/login');
    }
    return value;
  }
}
