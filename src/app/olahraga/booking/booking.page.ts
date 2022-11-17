/* eslint-disable @typescript-eslint/semi */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { BookingTimeEntity } from 'src/app/entities/BookingTime.entity';
import { CourtEntity } from 'src/app/entities/Court.entity';
import { VenueEntity } from 'src/app/entities/Venue.entity';
import { ApiService } from 'src/app/services/api.service';
import {
  getAllDaysInMonth,
  getMonthName,
  thisMonth,
  thisYear,
  today,
} from 'src/app/services/date.service';
import { AlertService } from 'src/app/services/ionic/alert.service';
import { ModalService } from 'src/app/services/ionic/modal.service';
import { isSequence } from 'src/app/services/utils.service';
import { environment } from 'src/environments/environment';
import { KeranjangPage } from './keranjang/keranjang.page';
import { courtMock, venueMock } from './mock';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  court: CourtEntity = {
    name:'',
    image:'',
    description:'',
    price_description:'',
    created_at:''
  };

  bookingTimes: BookingTimeEntity[] = [];
  selectedTimes = [];
  selectedBookingTimes: BookingTimeEntity[] = [];
  imageUrl = environment.imageUrl;
  totalPrice = 0;

  // DATE
  selectedDate = today();
  selectedMonth = thisMonth();
  selectedYear = thisYear();
  days = getAllDaysInMonth(this.selectedYear, this.selectedMonth);

  constructor(
    private apiService: ApiService,
    private alertService: AlertService,
    private modalService: ModalService,
    private modalController: ModalController,
    private router: Router,
    private location: Location
  ) {
  }


  async ngOnInit() {
    const result = await this.apiService.bookingTimes();
    this.bookingTimes = result.data.data;
    this.bookingTimes.map(
      (bookingTime) => (bookingTime.price = this.court.price)
    );
    this.initCourt();
  }

  async initCourt(){
    const temp = this.router.url.split('/');
    const result =  await this.apiService.court(temp[2]);
    this.court = result?.data?.data;
  }

  nextMonth() {
    this.selectedMonth += 1;
    if (this.selectedMonth > 11) {
      this.selectedMonth = 0;
      this.selectedYear += 1;
    }
    this.days = getAllDaysInMonth(this.selectedYear, this.selectedMonth);
  }

  prevMonth() {
    this.selectedMonth -= 1;
    if (this.selectedMonth < 1) {
      this.selectedMonth = 11;
      this.selectedYear -= 1;
    }
    this.days = getAllDaysInMonth(this.selectedYear, this.selectedMonth);
  }

  dateClick(day) {
    this.days.map((item) => {
      item.booked = false;
      return item;
    });
    day.booked = true;
    this.selectedDate = day.date;
  }

  monthName(month: number) {
    return getMonthName(month);
  }

  onCheckboxChange(event) {
    if (event.checked) {
      this.selectedTimes.push(event.value);
    } else {
      this.selectedTimes = this.selectedTimes.filter(
        (id) => event.value !== id
      );
    }

    //COUNT TOTAL PRICE
    this.totalPrice = 0;
    this.selectedBookingTimes = [];
    this.selectedTimes.map((id) => {
      const temp = this.bookingTimes.find(
        (bookingTime) => bookingTime.id == id
      );
      this.selectedBookingTimes.push(temp);
      this.totalPrice += temp.price;
    });
  }

  async selanjutnyaClick() {
    const temp = this.selectedTimes.toString().replace(/[^0-9]/g, '');
    if (!isSequence(temp)) {
      this.alertService.fail('Waktu booking harus berurutan !');
      return;
    }
    const { data } = await this.modalService.show(KeranjangPage, {
      bookingTimes: this.selectedBookingTimes,
      bookingDate: new Date(
        this.selectedYear,
        this.selectedMonth,
        this.selectedDate
      ),
      court: this.court,
    });
    // this.selectedBookingTimes = data.bookingTimes;
  }

  doRefresh(event) {
    this.ngOnInit();
  }

  backClick(){
    this.location.back()
  }
}
