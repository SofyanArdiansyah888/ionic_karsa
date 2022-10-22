import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/auth/authentication.service';
import { DatabaseService } from '../services/database/database.service';
import { AlertService } from '../services/ionic/alert.service';

@Component({
  selector: 'app-akun',
  templateUrl: './akun.page.html',
  styleUrls: ['./akun.page.scss'],
})
export class AkunPage implements OnInit {

  constructor(private alertService: AlertService,
    private authService: AuthenticationService,
    private databaseService: DatabaseService,
    private navController: NavController) { }

  ngOnInit() {
  }

  keluarClick(){
    this.alertService.confirm('Apakah kamu yakin ingin keluar ?','Ya','Tidak',()=>{
      this.authService.setLoggedIn(false);
      this.databaseService.clear();
      this.navController.navigateRoot('tabs/tab1');
    });
  }
}
