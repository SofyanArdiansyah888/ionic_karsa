import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private nav: NavController) {}

  getAccessToken(): string {
    const token = localStorage.getItem('access_token');
    return token;
  }

  setAccessToken(token: string) {
    localStorage.setItem('access_token', token);
  }


  clear() {
    localStorage.clear();
    this.nav.navigateRoot('tabs/tab1');
  }
}
