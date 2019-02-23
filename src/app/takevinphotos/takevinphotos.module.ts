import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TakevinphotosPage } from './takevinphotos.page';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';

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
