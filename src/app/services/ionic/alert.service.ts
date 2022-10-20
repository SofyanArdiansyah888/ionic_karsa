import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async success(subHeader, button, btnclass = 'warna onebtn') {
    const alert = await this.alertController.create({
      cssClass: 'konfirmasiki ',
      message:
        '<img class="hw-icon" src="assets/jac/global/bullhorn-solid.svg">',
      header: 'Sukses',
      subHeader,
      buttons: [
        {
          text: button,
          cssClass: btnclass,
        },
      ],
    });
    alert.present();
  }

  async fail(subHeader, header = 'Gagal') {
    const alert = await this.alertController.create({
      cssClass: 'konfirmasiki',
      message:
        '<img class="hw-icon" src="assets/jac/global/bullhorn-solid.svg">',
      header,
      subHeader,
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'warna',
        },
      ],
    });
    alert.present();
  }

  async confirm(subHeader, button1, button2, callback) {
    const alert = await this.alertController.create({
      cssClass: 'konfirmasiki',
      message:
        '<img class="hw-icon" src="assets/jac/global/bullhorn-solid.svg">',
      header: 'Maaf',
      subHeader,
      buttons: [
        {
          text: button1,
          cssClass: 'warna',
          handler: callback,
        },
        {
          text: button2,
          cssClass: 'hw-blank',
        },
      ],
    });
    alert.present();
  }

  async forgetPassword(buttons) {
    const alert = await this.alertController.create({
      cssClass: 'konfirmasi hw-confir-reset',
      header: 'Lupa?',
      message: '<img class="hw-icon" src="assets/jac/global/lock-solid.svg">',
      inputs: [
        {
          name: 'alamatemail',
          type: 'text',
          placeholder: 'Masukkan email anda',
        },
      ],
      buttons,
    });
    return await alert.present();
  }
}
