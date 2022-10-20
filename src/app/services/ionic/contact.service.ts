import { Injectable } from "@angular/core";
import {Contacts} from '@ionic-native/contacts/ngx';

@Injectable({
    providedIn: 'root'
})

export class ContactService{
    
    constructor(private contacts: Contacts){
    }

    async pickContact(){
        return await this.contacts.pickContact();
    }



}