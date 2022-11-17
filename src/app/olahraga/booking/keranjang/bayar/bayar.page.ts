import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { BookingTimeEntity } from 'src/app/entities/BookingTime.entity';
import { CourtEntity } from 'src/app/entities/Court.entity';
import { VenueEntity } from 'src/app/entities/Venue.entity';
import { ModalService } from 'src/app/services/ionic/modal.service';
import { InstruksiPage } from './instruksi/instruksi.page';

@Component({
  selector: 'app-bayar',
  templateUrl: './bayar.page.html',
  styleUrls: ['./bayar.page.scss'],
})
export class BayarPage implements OnInit {
  court: CourtEntity;
  venue: VenueEntity;
  bookingTimes: BookingTimeEntity[] = [];
  bookingDate: any;
  totalPrice = 0;
  constructor(
    private modalService: ModalService,
    private modalController: ModalController,
    navParams: NavParams
  ) {
    const { data } = navParams;
    this.court = data.court;
    this.venue = data.venue;
    this.bookingTimes = data.bookingTimes;
    this.bookingDate = data.bookingDate;
    this.countTotalPrice();
  }

  ngOnInit() {}

  selanjutnyaClick() {
    this.modalService.show(InstruksiPage, {
      court: this.court,
      venue: this.venue,
      bookingTimes: this.bookingTimes,
      bookingDate: this.bookingDate,
    });
  }

  countTotalPrice() {
    this.totalPrice = 0;
    this.bookingTimes.map((item) => {
      if (item.selected) {
        this.totalPrice += item.price;
      }
    });
  }

  backClick() {
    this.modalController.dismiss({
      court: this.court,
      venue: this.venue,
      bookingTimes: this.bookingTimes,
      bookingDate: this.bookingDate,
    });
  }
}
