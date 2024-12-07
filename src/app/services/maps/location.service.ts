import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NativeGeocoderOptions } from "@ionic-native/native-geocoder/ngx";
import { environment } from "src/app/environments/environment";
import { BaseconfigService } from "../api/baseconfig.service";
declare let google: any;

@Injectable({
  providedIn: "root",
})
export class LocationService {
  baseUrl = `https://maps.googleapis.com/maps/api/`;
  constructor(
    private geolocation: Geolocation,
    public http: BaseconfigService
  ) {}

  public async getAlamat(lat, lng) {
    let params = {
      latlng: `${lat},${lng}`,
      language: "id",
      region: "id",
      key: environment.googleMapApiKey,
    };
    let queryParams = new URLSearchParams(params);
    let result = await this.http.getData(
      `${this.baseUrl}geocode/json?${queryParams}`,
      false
    );
    return await result;
  }

  public async placeSearch(input) {
    let params = {
      query: input,
      radius: "50000",
      key: environment.googleMapApiKey,
    };
    let queryParams = new URLSearchParams(params);

    let result: any = await this.http.getData(
      `${this.baseUrl}place/textsearch/json?${queryParams}`,
      false
    );
    return result;
  }

  async getCurrentLocation() {
    return await this.geolocation.getCurrentPosition({
      enableHighAccuracy: true,
    });
  }
}
