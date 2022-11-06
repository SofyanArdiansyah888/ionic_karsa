import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BookingEntity } from '../entities/Booking.entity';
import { ApiService } from '../services/api.service';
import { AlertService } from '../services/ionic/alert.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  bookings: BookingEntity[] = [];
  imageUrl = environment.imageUrl;
  constructor(
    private apiService: ApiService,
    private alertService: AlertService
  ) {
    this.init();
  }

  async init() {
    try {
      const result = await this.apiService.bookings();
      this.bookings = result.data.data;
      console.log(this.bookings);
    } catch (error) {
      this.alertService.fail(error.message);
    }
  }

  async doRefresh(event: any) {
    setTimeout(async () => {
      await this.init();
      event.target.complete();
    }, 100);
  }
}
