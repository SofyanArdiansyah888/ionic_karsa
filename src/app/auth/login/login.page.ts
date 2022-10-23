/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { AxiosError } from 'axios';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AlertService } from 'src/app/services/ionic/alert.service';
import { ModalService } from 'src/app/services/ionic/modal.service';
import { DaftarPage } from '../daftar/daftar.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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

  ngOnInit() {}

  backClick(){
    this.modalController.dismiss();
  }

  daftarClick(){
    this.modalService.show(DaftarPage);
  }

  async login(loginData){
    try {
      const result = await this.apiService.login(loginData);
      if(result.data.status === true){
        this.databaseService.setAccessToken(result.data.token);
        this.authService.setLoggedIn(true);
        this.navController.navigateRoot('tabs/tab1');
        this.modalController.dismiss();
        this.alertService.success('Berhasil Login');
      }else{
        this.alertService.fail(result.data.message);
      }
    } catch (error) {
      this.alertService.fail(error.response.data.message);
    }


    this.authService.setLoggedIn(true);
  }

  async lupakiAlert() {
    const alert = await this.alertController.create({
      cssClass: 'konfirmasi',
      message:
        '<div class="hw-backgrond"><img src="assets/olahraga/lock-solid.svg" class="gambar-alert"></div> <br> <p class="hw-intro">Lupa ?<p>',
      //header: 'lupa',
      //message: 'Kami akan mengirimkan password baru ke alamat Email Anda.',
      buttons: ['Kirim Password'],
      inputs: [
        {
          type: 'email',
          placeholder: 'Masukkan Email Anda',
          name: 'alamatemail',
          min: 1,
          max: 100,
        },
      ],
    });

    await alert.present();
  }

  async berhasilAlert() {
    const alert = await this.alertController.create({
      cssClass: 'berhasilki konfirmasi',
      message:
        '<div class="hw-backgrond"><img src="assets/olahraga/bullhorn-solid.svg" class="gambar-alert"></div> <br> <p class="hw-intro">Berhasil<p>Password baru telah kami kirim ke email anda.',
      //header: 'lupa',
      //message: 'Kami akan mengirimkan password baru ke alamat Email Anda.',
      buttons: ['TERIMA KASIH'],
    });

    await alert.present();
  }

  async gagalAlert() {
    const alert = await this.alertController.create({
      cssClass: 'gagalki konfirmasi',
      message:
        '<div class="hw-backgrond"><img src="assets/olahraga/bullhorn-solid.svg" class="gambar-alert"></div><br> <p class="hw-intro">Maaf<p>Email/Password yang anda masukkan belum terdaftar atau Salah.',
      //header: 'lupa',
      //message: 'Kami akan mengirimkan password baru ke alamat Email Anda.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
