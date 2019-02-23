import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TakevinphotosPage } from './takevinphotos.page';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {Webmobil24LoginService} from '../services/webmobil24-login.service';
import {FilePath} from '@ionic-native/file-path/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {Storage} from '@ionic/storage';
import {File} from '@ionic-native/file/ngx';
import { TakevehiclephotosPage } './takevehiclephotos.page';

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
  providers: [
    Webmobil24LoginService,FilePath,Camera,WebView,Storage,File,
  ],
    declarations: [TakevehiclephotosPage]
})
export class TakevehiclephotosPageModule {}
