/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment';
import { DatabaseService } from './database/database.service';

// BASE CONFIGURATION
@Injectable({
    providedIn: 'root'
  })
  export class BaseConfig {
    baseConfig = {
     headers: {Authorization: ''}
     };
    baseUrl = environment.baseUrl;

    constructor(private databaseService: DatabaseService ){
    }

    async get(url: string) {
      this.baseConfig.headers.Authorization =  `Bearer ${this.databaseService.getAccessToken()}`;
      return await axios.get(`${this.baseUrl}/${url}`, this.baseConfig);
    }

    async post(url: string, data: any) {
      this.baseConfig.headers.Authorization =  `Bearer ${this.databaseService.getAccessToken()}`;
      return await axios.post(`${this.baseUrl}/${url}`, data, this.baseConfig);
    }

    async put(url: string, data: any) {
      this.baseConfig.headers.Authorization =  `Bearer ${this.databaseService.getAccessToken()}`;
      return await axios.put(`${this.baseUrl}/${url}`, data, this.baseConfig);
    }
  }

