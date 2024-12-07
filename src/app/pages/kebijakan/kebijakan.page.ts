import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { VenueEntity } from '../../entities/Venue.entity';

@Component({
  selector: 'app-kebijakan',
  templateUrl: './kebijakan.page.html',
  styleUrls: ['./kebijakan.page.scss'],
})
export class KebijakanPage implements OnInit {
  venue: VenueEntity;
  constructor(navParams: NavParams,private modalController: ModalController) {
    this.venue = navParams.data.venue;
   }

  ngOnInit() {
  }

  backClick(){
    this.modalController.dismiss();
  }

}
