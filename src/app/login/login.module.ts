import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule, MatIconModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    DragDropModule,
    ScrollingModule,


    ReactiveFormsModule,

    MatCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ])
  ],
  declarations: [ LoginPage ]
})
export class LoginPageModule {}
