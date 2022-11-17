/* eslint-disable @typescript-eslint/naming-convention */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { VenueEntity } from 'src/app/entities/Venue.entity';
import { KebijakanPage } from 'src/app/kebijakan/kebijakan.page';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/ionic/modal.service';
import { environment } from 'src/environments/environment';
import { PilihPage } from './pilih/pilih.page';

@Component({
  selector: 'app-singlesport',
  templateUrl: './singlesport.page.html',
  styleUrls: ['./singlesport.page.scss'],
})
export class SinglesportPage implements OnInit {
  venue: VenueEntity = {
    name: '',
    city: '',
    operating_day: '',
    operating_time: '',
    location: '',
    rating: '',
    description: '',
    logo: '',
    image1: '',
    image2: '',
    image3: '',
    courts: [],
    facilities: [],
  };
  imageUrl = environment.imageUrl;
  constructor(
    private modalController: ModalController,
    private modalService: ModalService,
    private apiService: ApiService,
    private router: Router,
    private location: Location
  ) {}

  async ngOnInit() {
    const temp = this.router.url.split('/');
    const result = await this.apiService.venue(temp[4]);
    this.venue = result?.data?.data;
  }

  backClick() {
    this.location.back();
  }

  termClick(venue: VenueEntity) {
    this.modalService.show(KebijakanPage, { venue });
  }

  pilihLapanganClick(venue: VenueEntity) {
    this.router.navigateByUrl(`${this.router.url}/pilih`);
  }
}
