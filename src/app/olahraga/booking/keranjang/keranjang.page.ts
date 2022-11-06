/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { BookingTimeEntity } from 'src/app/entities/BookingTime.entity';
import { CourtEntity } from 'src/app/entities/Court.entity';
import { VenueEntity } from 'src/app/entities/Venue.entity';
import { KebijakanPage } from 'src/app/kebijakan/kebijakan.page';
import { ModalService } from 'src/app/services/ionic/modal.service';
import { format } from 'date-fns';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/ionic/alert.service';
@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
})
export class KeranjangPage implements OnInit {
  court: CourtEntity;
  venue: VenueEntity;
  bookingTimes: BookingTimeEntity[] = [];
  bookingDate: any;
  totalPrice = 0;
  constructor(
    private modalController: ModalController,
    private modalService: ModalService,
    private apiService: ApiService,
    private alertService: AlertService,
    private navController: NavController,
    navParams: NavParams
  ) {
    const { data } = navParams;
    this.court = data.court;
    this.venue = data.venue;
    this.bookingTimes = data.bookingTimes;
    this.bookingDate = data.bookingDate;
    this.countTotalPrice();
    console.log(this.court, 'court');
    console.log(this.venue, 'venue');
    console.log(this.bookingTimes, 'bookingTimes');
    console.log(this.bookingDate, 'bookingDate');
  }

  ngOnInit() {}

  countTotalPrice() {
    this.bookingTimes.map((item) => {
      this.totalPrice += item.price;
    });
  }

  kebijakanClick() {
    this.modalService.show(KebijakanPage, { venue: this.venue });
  }

  deleteClick(item: BookingTimeEntity) {
    this.bookingTimes = this.bookingTimes.filter((temp) => temp.id !== item.id);
  }

  backClick() {
    this.modalController.dismiss({
      bookingTimes: this.bookingTimes,
    });
  }

  bookingClick() {
    const data = {
      court_id: this.court.id,
      booking_times: [...this.bookingTimes],
      booking_date: format(this.bookingDate, 'yyyy-MM-dd'),
    };

    try {
      this.apiService.doBooking(data);
      this.modalController.dismiss();
      this.navController.navigateRoot('tabs/tab2');
    } catch (error) {
      this.alertService.fail(error.message);
    }
  }
}
