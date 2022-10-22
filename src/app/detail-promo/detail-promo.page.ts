import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { PromoEntity } from '../entities/Promo.entity';

@Component({
  selector: 'app-detail-promo',
  templateUrl: './detail-promo.page.html',
  styleUrls: ['./detail-promo.page.scss'],
})
export class DetailPromoPage implements OnInit {
  imageUrl = environment.imageUrl;
  promo: PromoEntity = {
    name:'',
    description:'',
    image:'',
  };

  constructor(private navParams: NavParams, private modalController: ModalController) {
    this.promo = navParams.data.promo;
  }

  ngOnInit() {
  }

  backClick(){
    this.modalController.dismiss();
  }

}
