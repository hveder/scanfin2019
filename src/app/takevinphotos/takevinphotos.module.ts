import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TakevinphotosPage } from './takevinphotos.page';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { HttpClient } from '@angular/common/http';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TakevinphotosPage
      }
    ])
  ],
  declarations: [TakevinphotosPage]
})
export class TakevinphotosPageModule {}
