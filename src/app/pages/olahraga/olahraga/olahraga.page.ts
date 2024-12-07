/* eslint-disable @typescript-eslint/naming-convention */
import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {environment} from 'src/app/environments/environment';
import {CategoryEntity} from 'src/app/entities/Category.entity';
import {VenueEntity} from 'src/app/entities/Venue.entity';
import {ApiService} from 'src/app/services/api.service';
import {ModalService} from 'src/app/services/ionic/modal.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-olahraga',
  templateUrl: './olahraga.page.html',
  styleUrls: ['./olahraga.page.scss'],
})
export class OlahragaPage implements OnInit {
  venues: VenueEntity[] = [];
  category: CategoryEntity = {
    id:0,
    name:'Kategori',
    image:'',
    background_color:'',
  };
  imageUrl = environment.imageUrl;
  loading = false;
  constructor(
    // navParams: NavParams,
    private router: Router,
    private location: Location,
    private modalController: ModalController,
    private modalService: ModalService,
    private apiService: ApiService) {
    // this.category = navParams.data.category;
   }

  async ngOnInit() {
    const temp = this.router.url.split('/');
    this.loading = true;
    const result =  await this.apiService.venues(temp[2]);
    const category = await this.apiService.category(temp[2]);
    this.category = category?.data?.data;

    console.log(this.category)
    this.loading = false;
    this.venues = result.data.data;
  }

  backClick(){
    this.location.back();
  }

  venueClick(venue: VenueEntity){
    this.router.navigateByUrl(`${this.router.url}/singlesport/${venue.id}`);
  }

  async doRefresh(event: any) {
    setTimeout(async () => {
      await this.ngOnInit();
      event.target.complete();
    }, 100);
  }

}
