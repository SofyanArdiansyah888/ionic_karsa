import { Injectable } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";


@Injectable({
    providedIn: 'root'
})

export class ActionSheetService {
    constructor(private action: ActionSheetController) {
    }

    async show(buttons) {
        const actionSheet = await this.action.create({
            header: 'Pilih gambar dari:',
            buttons
        });
        await actionSheet.present();
    }



}