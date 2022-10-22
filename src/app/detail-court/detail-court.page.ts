import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-court',
  templateUrl: './detail-court.page.html',
  styleUrls: ['./detail-court.page.scss'],
})
export class DetailCourtPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  backClick() {
    this.modalController.dismiss();
  }
}
