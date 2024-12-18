/* eslint-disable @typescript-eslint/quotes */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from 'src/app/environments/environment';
import {AdvertisingEntity} from '../../entities/Advertising.entity';
import {CategoryEntity} from '../../entities/Category.entity';
import {CourtEntity} from '../../entities/Court.entity';
import {KontakPage} from '../kontak/kontak.page';
import {KategoriPage} from 'src/app/pages/kategori/kategori/kategori.page';
import {ApiService} from '../../services/api.service';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {AlertService} from '../../services/ionic/alert.service';
import {ModalService} from '../../services/ionic/modal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  advertisings: AdvertisingEntity[] = [];
  categories: CategoryEntity[] = [];
  courts: CourtEntity[] = [];
  promos: CourtEntity[] = [];
  loading = false;
  imageUrl = environment.imageUrl;

  constructor(
    private api: ApiService,
    private modal: ModalService,
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService,
  ) {
    this.init();
  }

  async init() {
    this.loading = true;
    const [tempAdvertising, tempCategory, tempCourt] =
      await Promise.all([
        this.api.advertisings(),
        this.api.categories(),
        this.api.courts(),
      ]);
    this.loading = false;
    this.advertisings = tempAdvertising.data.data;
    this.categories = tempCategory.data.data;
    this.courts = tempCourt.data.data;
    this.promos = this.courts.filter((court) => court.promo !== "" );
  }

  async doRefresh(event: any) {
    setTimeout(async () => {
      await this.init();
      event.target.complete();
    }, 100);
  }

  promoClick(court: CourtEntity) {
    this.router.navigateByUrl(`court/${court.id}/detail-promo`);
  }

  courtClick(court: CourtEntity) {
    this.router.navigateByUrl(`court/${court.id}/detail-court`);
}

  kontakClick(){
    this.modal.show(KontakPage);
  }

  kategoriClick(category: CategoryEntity){
    if(this.authService.isLoggedIn){
      this.modal.show(KategoriPage,{category});
    }else{
      this.alertService.fail('Silahkan login terlebih dahulu untuk dapat membooking!');
    }
  }
}
