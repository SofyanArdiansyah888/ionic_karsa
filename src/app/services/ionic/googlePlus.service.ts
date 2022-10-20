import { Injectable } from "@angular/core";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { DatabaseService } from "../database/database.service";
import { Alert } from "./alert.service";
@Injectable({
  providedIn: "root",
})
export class GooglePlusService {
  constructor(
    private googlePlus: GooglePlus,
    private alert: Alert,
    private databaseService: DatabaseService
  ) {}

  async login() {
    try {
      let result = await this.googlePlus.login({});
      return result;
    } catch (e) {
      if (e !== 12500) this.alert.fail(e);
    }
  }

  async logout() {
    await this.googlePlus.logout();
    this.databaseService.clear();
  }
}
