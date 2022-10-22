import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-kontak',
  templateUrl: './kontak.page.html',
  styleUrls: ['./kontak.page.scss'],
})
export class KontakPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  backClick(){
    this.modalController.dismiss();
  }

}
