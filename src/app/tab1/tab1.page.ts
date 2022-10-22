import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DetailCourtPage } from '../detail-court/detail-court.page';
import { DetailPromoPage } from '../detail-promo/detail-promo.page';
import { AdvertisingEntity } from '../entities/Advertising.entity';
import { CategoryEntity } from '../entities/Category.entity';
import { CourtEntity } from '../entities/Court.entity';
import { PromoEntity } from '../entities/Promo.entity';
import { KontakPage } from '../kontak/kontak.page';
import { OlahragaPage } from '../olahraga/olahraga.page';
import { ApiService } from '../services/api.service';
import { AuthenticationService } from '../services/auth/authentication.service';
import { AlertService } from '../services/ionic/alert.service';
import { ModalService } from '../services/ionic/modal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  advertisings: AdvertisingEntity[] = [];
  categories: CategoryEntity[] = [];
  courts: CourtEntity[] = [];
  promos: PromoEntity[] = [];
  loading = false;
  imageUrl = environment.imageUrl;

  constructor(
    private api: ApiService,
    private modal: ModalService,
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService
  ) {
    this.init();
  }

  async init() {
    this.loading = true;
    const [tempAdvertising, tempCategory, tempCourt, tempPromo] =
      await Promise.all([
        this.api.advertisings(),
        this.api.categories(),
        this.api.courts(),
        this.api.promos(),
      ]);
    this.loading = false;
    this.advertisings = tempAdvertising.data.data;
    this.categories = tempCategory.data.data;
    this.courts = tempCourt.data.data;
    this.promos = tempPromo.data.data;
  }

  async doRefresh(event: any) {
    setTimeout(async () => {
      await this.init();
      event.target.complete();
    }, 100);
  }

  promoClick(promo: PromoEntity) {
    this.modal.show(DetailPromoPage, { promo });
  }

  courtClick(court: CourtEntity) {
    this.modal.show(DetailCourtPage, { court });
  }

  kontakClick(){
    this.modal.show(KontakPage);
  }

  kategoriClick(category: CategoryEntity){
    if(this.authService.isLoggedIn){
      this.modal.show(OlahragaPage,{category});
    }else{
      this.alertService.fail('Silahkan login terlebih dahulu untuk dapat membooking!');
    }
  }
}
