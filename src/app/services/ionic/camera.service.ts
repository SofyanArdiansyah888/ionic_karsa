import { Injectable } from "@angular/core";
import {
  Camera,
  CameraOptions,
  PictureSourceType,
} from "@ionic-native/camera/ngx";
@Injectable({
  providedIn: "root",
})
export class CameraService {
  constructor(private camera: Camera) { }

  async getPicture(
    sourceType: PictureSourceType = this.camera.PictureSourceType.CAMERA
  ) {
    const options: CameraOptions = {
      quality: 10,
      sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    const imageData = await this.camera.getPicture(options);
    return imageData;
  }
}
