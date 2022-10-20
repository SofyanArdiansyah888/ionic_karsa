import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async lupakiAlert() {
    const alert = await this.alertController.create({
      cssClass: 'konfirmasi',
      message: '<div class="hw-backgrond"><img src="assets/olahraga/lock-solid.svg" class="gambar-alert"></div> <br> <p class="hw-intro">Lupa ?<p>',
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
      message: '<div class="hw-backgrond"><img src="assets/olahraga/bullhorn-solid.svg" class="gambar-alert"></div> <br> <p class="hw-intro">Berhasil<p>Password baru telah kami kirim ke email anda.',
      //header: 'lupa',
      //message: 'Kami akan mengirimkan password baru ke alamat Email Anda.',
      buttons: ['TERIMA KASIH'],
    });

    await alert.present();
  }

  async gagalAlert() {
    const alert = await this.alertController.create({
      cssClass: 'gagalki konfirmasi',
      message: '<div class="hw-backgrond"><img src="assets/olahraga/bullhorn-solid.svg" class="gambar-alert"></div><br> <p class="hw-intro">Maaf<p>Email/Password yang anda masukkan belum terdaftar atau Salah.',
      //header: 'lupa',
      //message: 'Kami akan mengirimkan password baru ke alamat Email Anda.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
