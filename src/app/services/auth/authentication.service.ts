import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;
  constructor() { }
  // tslint:disable-next-line:variable-name
  setLoggedIn(_value) {
    this.isLoggedIn = _value;
  }
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
