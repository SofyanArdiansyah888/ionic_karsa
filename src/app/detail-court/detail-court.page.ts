/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CourtEntity } from '../entities/Court.entity';

@Component({
  selector: 'app-detail-court',
  templateUrl: './detail-court.page.html',
  styleUrls: ['./detail-court.page.scss'],
})
export class DetailCourtPage implements OnInit {
  court: CourtEntity = {
    name:'',
    image:'',
    description:'',
    price_description:'',
    field_type:'',
    pedestal_type:'',
    sports:''
  };
  imageUrl = environment.imageUrl;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  backClick() {
    this.modalController.dismiss();
  }
}
