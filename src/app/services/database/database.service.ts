import { Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import * as moment from "moment";
@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private nav: NavController) {}

  getUser() {
    const profil = localStorage.getItem("client");
    if (profil) {
      return JSON.parse(profil);
    }
    return null;
  }

  setUser(user) {
    localStorage.setItem("client", JSON.stringify(user));
  }

  setPenerima(penerima) {
    localStorage.setItem("penerima", JSON.stringify(penerima));
  }

  getPenerima() {
    const penerima = localStorage.getItem("penerima");
    if (penerima) {
      return JSON.parse(penerima);
    }
    return null;
  }

  removePenerima() {
    localStorage.removeItem("penerima");
  }

  setPengirim(pengirim) {
    localStorage.setItem("pengirim", JSON.stringify(pengirim));
  }

  getPengirim() {
    let pengirim = localStorage.getItem("pengirim");
    if (pengirim) {
      return JSON.parse(pengirim);
    }
    return null;
  }

  removePengirim() {
    localStorage.removeItem("pengirim");
  }

  setKabupaten(kabupaten) {
    let cacheExpired = moment().add(3, "days");
    let data = {
      kabupaten,
      cacheExpired,
    };
    localStorage.setItem("kabupaten", JSON.stringify(data));
  }

  getKabupaten() {
    let kabupaten: any = localStorage.getItem("kabupaten");
    if (!kabupaten) return null;

    kabupaten = JSON.parse(kabupaten);
    if (kabupaten.cacheExpired < moment()) return null;
    return kabupaten.kabupaten;
  }

  setPromoMitra(promoMitra) {
    let cacheExpired = moment().add(15, "minutes");
    let data = {
      promoMitra,
      cacheExpired,
    };
    localStorage.setItem("promoMitra", JSON.stringify(data));
  }

  getPromoMitra() {
    let promoMitra: any = localStorage.getItem("promoMitra");
    if (!promoMitra) return null;

    promoMitra = JSON.parse(promoMitra);
    if (promoMitra.cacheExpired < moment()) return null;
    return promoMitra.promoMitra;
  }

  setIsOrder() {
    localStorage.setItem("isOrder", "");
  }

  getIsOrder() {
    return localStorage.getItem("isOrder");
  }

  removeIsOrder() {
    localStorage.removeItem("isOrder");
  }

  clear() {
    localStorage.clear();
    this.nav.navigateRoot("tabs/tab1");
  }
}
