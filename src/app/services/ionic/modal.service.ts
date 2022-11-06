/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalController: ModalController) {}

  modalInst = [];
  i = 0;

  storeModal(x) {
    this.modalInst[this.i] = x;
    this.i++;
  }

  async show(component, componentProps = {}) {
    const modal = await this.modalController.create({
      component,
      componentProps,
    });
    modal.present();
    this.storeModal(modal);
    return await modal.onWillDismiss();
  }
}
