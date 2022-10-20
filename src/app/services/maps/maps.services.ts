import { Injectable } from "@angular/core";
import { Alert } from "../ionic/alert.service";
import { LocationService } from "./location.service";
declare var google: any;
@Injectable({
  providedIn: "root",
})
export class MapService {
  constructor(private locationService: LocationService, private alert: Alert) {}

  async initMap(mapElement, latitude = null, longitude = null, zoom = 15) {
    try {
      if (latitude === null && longitude === null) {
        // GET CURRENT LOCATION
        const currentLocation = await this.locationService.getCurrentLocation();
        latitude = currentLocation.coords.latitude;
        longitude = currentLocation.coords.longitude;
      }

      let mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom,
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      // SET TO CURRENT ADDRESS
      // this.markerClick(latitude,longitude);

      // let map = null;
      // setTimeout(() => {
      //   // INIT GOOGLE MAP
      //   map = new google.maps.Map(mapElement, mapOptions);
      // },300)

      let map = new google.maps.Map(mapElement, mapOptions);

      // if (markers.length > 0) {
      //   markers.map((marker) => {
      //     if (marker.latitude !== "" && marker.latitude !== null) {
      //       let latlng = {
      //         lat: parseFloat(marker.latitude),
      //         lng: parseFloat(marker.longitude),
      //       };

      //       let gmapMarker = new google.maps.Marker({
      //         position: latlng,
      //         icon: {
      //           url: "assets/icon/marker-kurir.png",
      //         },
      //         title: "Hello World!",
      //       });
      //       gmapMarker.setMap(map);
      //     }
      //   });
      // }
      return { map, latitude, longitude };
    } catch (e) {
      this.alert.fail(e.message);
    }
  }

  async markerClick(lat, lng) {
    let result: any = await this.locationService.getAlamat(lat, lng);
    let latitude = lat;
    let longitude = lng;
    let kelurahan = "";
    let kecamatan = "";
    let kota = "";
    let alamat = "";

    if (result.results.length > 0) {
      result.results[0].address_components.map((addressComponent) => {
        switch (addressComponent.types[0]) {
          case "administrative_area_level_4":
            kelurahan = addressComponent.long_name.toUpperCase();
            break;
          case "administrative_area_level_3":
            kecamatan = addressComponent.long_name
              .replace("Kecamatan ", "")
              .toUpperCase();
            break;
          case "administrative_area_level_2":
            kota = addressComponent.long_name.toUpperCase();
            break;
        }
      });
      alamat = result.results[0].formatted_address;
    }
    return {
      latitude,
      longitude,
      kecamatan,
      kelurahan,
      kota,
      alamat,
    };
  }
}
