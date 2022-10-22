/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { BookingTimeEntity } from 'src/app/entities/BookingTime.entity';
import { CourtEntity } from 'src/app/entities/Court.entity';
import { VenueEntity } from 'src/app/entities/Venue.entity';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})


export class BookingPage implements OnInit {
  court: CourtEntity;
  venue: VenueEntity;
  bookingTimes: BookingTimeEntity[] = [
    {
      name: '07:00 - 08:00',
      price: 25000,
    },
    {
      name: '08:00 - 09:00',
      price: 25000,
    },
  ];
  imageUrl = environment.imageUrl;

  // DATE
  date = new Date();
  year = this.date.getFullYear();
  month = this.date.getMonth();
  day = this.date.getDay();

  constructor(navParams: NavParams, private apiService: ApiService) {
    this.court = navParams.data.court;
    this.venue = navParams.data.venue;
   }

  ngOnInit() {
  }

  selectedItems(event) {
    console.log(event.target.value);
  }

  doRefresh(event){

  }
}
