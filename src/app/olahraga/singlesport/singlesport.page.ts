/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { VenueEntity } from 'src/app/entities/Venue.entity';
import { KebijakanPage } from 'src/app/kebijakan/kebijakan.page';
import { ModalService } from 'src/app/services/ionic/modal.service';
import { environment } from 'src/environments/environment';
import { PilihPage } from '../pilih/pilih.page';

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
  };
  imageUrl = environment.imageUrl;
  constructor(
    navParams: NavParams,
    private modalController: ModalController,
    private modalService: ModalService
  ) {
    this.venue = navParams.data.venue;
  }

  ngOnInit() {}

  backClick() {
    this.modalController.dismiss();
  }

  termClick(venue: VenueEntity){
    this.modalService.show(KebijakanPage,{venue});
  }

  pilihLapanganClick(venue: VenueEntity){
    this.modalService.show(PilihPage,{venue});
  }

}
