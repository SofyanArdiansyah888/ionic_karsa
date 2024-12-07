import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { KontakPage } from 'src/app/pages/kontak/kontak.page';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AlertService } from 'src/app/services/ionic/alert.service';
import { ModalService } from 'src/app/services/ionic/modal.service';
import { BiodataPage } from '../biodata/biodata.page';
import { KebijakanPrivasiPage } from '../kebijakan-privasi/kebijakan-privasi.page';
import { SyaratKetentuanPage } from '../syarat-ketentuan/syarat-ketentuan.page';
import { UbahpassPage } from '../ubahpass/ubahpass.page';

@Component({
  selector: 'app-akun',
  templateUrl: './akun.page.html',
  styleUrls: ['./akun.page.scss'],
})
export class AkunPage implements OnInit {

  constructor(private alertService: AlertService,
    private authService: AuthenticationService,
    private databaseService: DatabaseService,
    private modalService: ModalService,
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
  passwordClick(){
    this.modalService.show(UbahpassPage);
  }
  biodataClick(){
    this.modalService.show(BiodataPage);
  }
  hubungiKamiClick(){
    this.modalService.show(KontakPage);
  }

  syaratKetentuanClick(){
    this.modalService.show(SyaratKetentuanPage);
  }

  kebijakanPrivasiClick(){
    this.modalService.show(KebijakanPrivasiPage);
  }
}
