import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {Webmobil24LoginService} from '../services/webmobil24-login.service';
import { TakevehiclephotosPage } from './takevehiclephotos.page';



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
        component: TakevehiclephotosPage
      }
    ])
  ],
  providers: [
    Webmobil24LoginService,
  ],
    declarations: [TakevehiclephotosPage]
})
export class TakevehiclephotosPageModule {}
