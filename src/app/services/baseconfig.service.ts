/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

// BASE CONFIGURATION
@Injectable({
    providedIn: 'root'
  })
  export class BaseConfig {
    baseConfig = {
     headers: {Authorization: 'Bearer 1|iyIdomUt4AjLTc6MYENhkEuTunAery8muk03OBOc'}
     };
    baseUrl = environment.baseUrl;

    async get(url: string) {
      return await axios.get(`${this.baseUrl}/${url}`, this.baseConfig);
    }

    async post(url: string, data: any) {
      return await axios.post(`${this.baseUrl}/${url}`, data, this.baseConfig);
    }

    async put(url: string, data: any) {
      return await axios.put(`${this.baseUrl}/${url}`, data, this.baseConfig);
    }
  }

