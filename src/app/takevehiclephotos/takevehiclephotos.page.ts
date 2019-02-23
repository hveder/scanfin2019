import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { BrowserModule } from '@angular/platform-browser';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { finalize } from 'rxjs/operators';
import { AwsOcRServiceService } from '../services/aws-oc-rservice.service';
import { Form } from '@angular/forms';
import { WebservicecallsTokenanager } from '../webservicecalls/webservicecalls.tokenmanager';
import {ActivatedRoute, Router} from '@angular/router';



const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-takevehiclephotos',
  templateUrl: 'takevehiclephotos.page.html',
  styleUrls: ['takevehiclephotos.page.scss']
})
export class TakevehiclephotosPage implements OnInit {


  images = [];

  constructor(private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
              private actionSheetController: ActionSheetController, private toastController: ToastController,
              private storage: Storage, private plt: Platform, private loadingController: LoadingController,
              private ref: ChangeDetectorRef, private filePath: FilePath,
              private awsOcRServiceService: AwsOcRServiceService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {

  }



  takePicture() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
};
const that = this;
this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
 const base64Image = imageData;
  that.awsOcRServiceService.callfnDetectVin(base64Image).then((res) => {
    console.log('Data');
  }, (msg => {
    console.log('result');
  }));


}, (err) => {
 // Handle error
});



  }





}
