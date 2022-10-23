import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserEntity } from 'src/app/entities/User.entity';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/ionic/alert.service';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.page.html',
  styleUrls: ['./biodata.page.scss'],
})
export class BiodataPage implements OnInit {
  user: UserEntity = {
    name:'',
    email:'',
    client:{
      sex:'',
      birthday:'',
      height:'',
      weight:'',
      phone:'',
      photo:''
    }
  };

  constructor(private apiService: ApiService,
    private modalController: ModalController,
    private alertService: AlertService) { }

  async ngOnInit() {
    const result = await this.apiService.profile();
    this.user = result.data;
  }

  async updateProfile(form){
    try {
      const result = await this.apiService.updateProfile(form);
      if(result.data.status === true){
        this.alertService.success('Berhasil Mengupdate Data Profile Anda!');
      }else{
        this.alertService.fail(result.data.message);
      }
    } catch (error) {
      this.alertService.fail(error.response.data.message);
    }
  }

  backClick(){
    this.modalController.dismiss();
  }

}
