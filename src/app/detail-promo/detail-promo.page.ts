/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CourtEntity } from '../entities/Court.entity';
import { BookingPage } from '../olahraga/booking/booking.page';
import { AuthenticationService } from '../services/auth/authentication.service';
import { AlertService } from '../services/ionic/alert.service';
import { ModalService } from '../services/ionic/modal.service';

@Component({
  selector: 'app-detail-promo',
  templateUrl: './detail-promo.page.html',
  styleUrls: ['./detail-promo.page.scss'],
})
export class DetailPromoPage implements OnInit {
  imageUrl = environment.imageUrl;
  court: CourtEntity = {
    name: '',
    description: '',
    image: '',
    price_description: '',
  };

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private authService: AuthenticationService,
    private alertService: AlertService,
    private modalService: ModalService
  ) {
    this.court = navParams.data.court;
  }

  ngOnInit() {}

  backClick() {
    this.modalController.dismiss();
  }

  bookingClick() {
    if (this.authService.isLoggedIn) {
      this.modalService.show(BookingPage,{court:this.court});
    } else {
      this.alertService.fail(
        'Silahkan login terlebih dahulu untuk dapat membooking!'
      );
    }
  }
}
