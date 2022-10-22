import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CourtEntity } from 'src/app/entities/Court.entity';
import { VenueEntity } from 'src/app/entities/Venue.entity';
import { ModalService } from 'src/app/services/ionic/modal.service';
import { environment } from 'src/environments/environment';
import { BookingPage } from '../booking/booking.page';

@Component({
  selector: 'app-pilih',
  templateUrl: './pilih.page.html',
  styleUrls: ['./pilih.page.scss'],
})
export class PilihPage implements OnInit {
  venue: VenueEntity;
  courts: CourtEntity[] = [];
  imageUrl = environment.imageUrl;
  constructor(
    navParams: NavParams,
    private modalController: ModalController,
    private modalService: ModalService
  ) {
    this.venue = navParams.data.venue;
    this.courts = this.venue.courts;
  }

  ngOnInit() {}

  backClick() {
    this.modalController.dismiss();
  }

  bookingClick(court: CourtEntity) {
    this.modalService.show(BookingPage, { court, venue: this.venue });
  }
}
