import { Injectable } from '@angular/core';
import { UserEntity } from '../entities/User.entity';
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

  policies(){
    return this.api.get('policies');
  }




  // AUTH
  profile() {
    return this.api.get('profile');
  }
  updateProfile(data: {
    birthday: string;
    sex: string;
    name: string;
    email: string;
    phone: string;
    height: number;
    weight: number;
  }) {
    return this.api.post('update-profile',data);
  }
  forgotPassword(data: { email: string}) {
    return this.api.post('forget-password', data);
  }

  changePassword(data: { newPassword: string; confirmPassword: string }) {
    return this.api.post('change-password', data);
  }

  login(data: { username: string; password: string }) {
    return this.api.post('login', data);
  }

  sendOTP(data: { email: string}) {
    return this.api.post('send-otp', data);
  }

  register(data: { username: string; password: string }) {
    return this.api.post('register', data);
  }
}

