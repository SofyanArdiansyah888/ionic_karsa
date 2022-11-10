/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CategoryEntity } from '../entities/Category.entity';
import { VenueEntity } from '../entities/Venue.entity';
import { ApiService } from '../services/api.service';
import { ModalService } from '../services/ionic/modal.service';
import { SinglesportPage } from './singlesport/singlesport.page';

@Component({
  selector: 'app-olahraga',
  templateUrl: './olahraga.page.html',
  styleUrls: ['./olahraga.page.scss'],
})
export class OlahragaPage implements OnInit {
  venues: VenueEntity[] = [];
  category: CategoryEntity = {
    id:0,
    name:'',
    image:'',
    background_color:'',
  };
  imageUrl = environment.imageUrl;
  loading = false;
  constructor(navParams: NavParams,
    private modalController: ModalController,
    private modalService: ModalService,
    private apiService: ApiService) {
    this.category = navParams.data.category;
   }

  async ngOnInit() {
    this.loading = true;
    const result =  await this.apiService.venues(this.category.id);
    this.loading = false;
    this.venues = result.data.data;
  }

  backClick(){
    this.modalController.dismiss();
  }

  venueClick(venue: VenueEntity){
    this.modalService.show(SinglesportPage,{venue});
  }

  async doRefresh(event: any) {
    setTimeout(async () => {
      await this.ngOnInit();
      event.target.complete();
    }, 100);
  }

}
