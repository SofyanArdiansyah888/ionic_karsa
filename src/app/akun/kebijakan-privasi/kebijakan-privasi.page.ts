import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { PolicyEntity } from 'src/app/entities/Policy.entity';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-kebijakan-privasi',
  templateUrl: './kebijakan-privasi.page.html',
  styleUrls: ['./kebijakan-privasi.page.scss'],
})
export class KebijakanPrivasiPage implements OnInit {
  policies: PolicyEntity[] = [
    {
      name: '',
      description: '',
    }
  ];
  constructor(
    private apiService: ApiService,
    private modalController: ModalController
  ) {}

  async ngOnInit() {
    const temp = await this.apiService.policies();
    this.policies = temp.data.data;
  }

  async doRefresh(event: any) {
    setTimeout(async () => {
      await this.ngOnInit();
      event.target.complete();
    }, 100);
  }

  backClick() {
    this.modalController.dismiss();
  }
}
