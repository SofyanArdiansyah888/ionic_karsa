/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CourtEntity } from '../entities/Court.entity';
import { BookingPage } from '../olahraga/booking/booking.page';
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
  constructor(private modalController: ModalController,
    private authService: AuthenticationService,
    private modalService: ModalService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  bookingClick(){
    if(this.authService.isLoggedIn){
      this.modalService.show(BookingPage,{court:this.court});
    }else{
      this.alertService.fail('Silahkan login terlebih dahulu untuk dapat membooking!');
    }
  }
  backClick() {
    this.modalController.dismiss();
  }
}
