import { Injectable } from "@angular/core";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { DetailRiwayatPage } from "src/app/pages/history/detail-riwayat/detail-riwayat.page";

import { environment } from "src/app/environments/environment";
import { ApiService } from "../api/api.service";
import { DatabaseService } from "../database/database.service";
import { ModalService } from "./modal.service";
@Injectable({
  providedIn: "root",
})
export class OnesignalService {
  constructor(
    private oneSignal: OneSignal,
    private api: ApiService,
    private database: DatabaseService,
    private modalService: ModalService
  ) {}

  init() {
    try {
      this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 });

      this.oneSignal.startInit(
        environment.onesignalAppID,
        environment.onesignalProjectNumber
      );

      this.oneSignal.inFocusDisplaying(
        this.oneSignal.OSInFocusDisplayOption.Notification
      );

      this.oneSignal.handleNotificationOpened().subscribe((payload) => {
        // do something when a notification is opened
        const nomor_order_penerima =
          payload.notification.payload.additionalData.nomor_order_penerima;
        let detail = {
          nomor_order_penerima,
        };
        this.modalService.show(DetailRiwayatPage, {
          detail,
        });
      });

      this.oneSignal.getIds().then((data) => {
        const user = this.database.getUser();
        if (user) this.api.updateOnesignal(user.id, data.userId);
      });
      this.oneSignal.endInit();
    } catch (error) {
      console.log(error);
    }
  }
}
