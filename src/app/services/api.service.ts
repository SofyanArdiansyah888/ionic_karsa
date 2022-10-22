import { Injectable } from '@angular/core';
import { BaseConfig } from './baseconfig.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: BaseConfig) { }

  categories() {
    return this.api.get('categories');
  }

  advertisings() {
    return this.api.get('advertisings');
  }

  courts() {
    return this.api.get('courts');
  }

  promos(){
    return this.api.get('promos');
  }

  venues(categoryId: any) {
    const urlParams = new URLSearchParams();
    urlParams.set('category_id', categoryId);
    return this.api.get(`venues?${urlParams}`);
  }




  // AUTH
  forgotPassword(data: { email: string}) {
    return this.api.post('forgot-password', data);
  }

  changePassword(data: { newPassword: string; confirmPassword: string }) {
    return this.api.post('change-password', data);
  }

  login(data: { username: string; password: string }) {
    return this.api.post('login', data);
  }
}

