/* eslint-disable @typescript-eslint/naming-convention */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CourtEntity } from '../entities/Court.entity';
import { BookingPage } from '../olahraga/booking/booking.page';
import { ApiService } from '../services/api.service';
import { AuthenticationService } from '../services/auth/authentication.service';
import { AlertService } from '../services/ionic/alert.service';
import { ModalService } from '../services/ionic/modal.service';

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
  constructor(
    private modalController: ModalController,
    private authService: AuthenticationService,
    private alertService: AlertService,
    private modalService: ModalService,
    private router: Router,
    private apiService: ApiService,
    private location: Location
  ) {
  }

  async ngOnInit() {
    const temp = this.router.url.split('/');
    const result = await this.apiService.court(temp[2]);
    this.court = result?.data?.data;
  }

  backClick() {
    this.location.back();
  }

  bookingClick(){
    if(this.authService.isLoggedIn){
      this.router.navigateByUrl(`court/${this.court.id}/booking`);
    }else{
      this.alertService.fail('Silahkan login terlebih dahulu untuk dapat membooking!');
    }
  }
}
