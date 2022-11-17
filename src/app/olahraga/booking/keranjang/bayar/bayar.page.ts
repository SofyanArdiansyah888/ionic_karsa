import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/services/ionic/modal.service';
import { InstruksiPage } from './instruksi/instruksi.page';

@Component({
  selector: 'app-bayar',
  templateUrl: './bayar.page.html',
  styleUrls: ['./bayar.page.scss'],
})
export class BayarPage implements OnInit {

  constructor(private modalService: ModalService,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  selanjutnyaClick(){
    this.modalService.show(InstruksiPage);
  }

  backClick(){
    // this.modalController.dismiss();
  }

}
