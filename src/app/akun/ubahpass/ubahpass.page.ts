import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AlertService } from 'src/app/services/ionic/alert.service';

@Component({
  selector: 'app-ubahpass',
  templateUrl: './ubahpass.page.html',
  styleUrls: ['./ubahpass.page.scss'],
})
export class UbahpassPage implements OnInit {
  showPassword = false;
  constructor(private apiService: ApiService,
    private modalController: ModalController,
    private authService: AuthenticationService,
    private databaseService: DatabaseService,
    private navController: NavController,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  async changePassword(form){
    try {
      const result = await this.apiService.changePassword(form);
      if(result.data.status === true){
        this.modalController.dismiss();
        this.authService.setLoggedIn(false);
        this.databaseService.clear();
        this.navController.navigateRoot('tabs/tab1');
        this.alertService.success('Berhasil Mengubah Password Anda!');
      }else{
        this.alertService.fail(result.data.message);
      }
    } catch (error) {
      this.alertService.fail(error.response.data.message);
    }
  }

  togglePassword(){
    this.showPassword = !this.showPassword;
  }

  backClick(){
    this.modalController.dismiss();
  }

}
