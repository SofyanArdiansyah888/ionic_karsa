import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AlertService } from 'src/app/services/ionic/alert.service';
import { ModalService } from 'src/app/services/ionic/modal.service';
import { OtpPage } from '../otp/otp.page';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private authService: AuthenticationService,
    private navController: NavController,
    private modalController: ModalController,
    private alertService: AlertService,
    private apiService: ApiService,
    private databaseService: DatabaseService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
  }

  backClick(){
    this.modalController.dismiss();
  }

  async register(form){
    try {
      const result = await this.apiService.sendOTP(form);
      if(result.data.status === true){
        this.modalService.show(OtpPage,{data:form});
      }else{
        this.alertService.fail(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
