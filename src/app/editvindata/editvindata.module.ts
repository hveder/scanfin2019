import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditvindataPage } from './editvindata.page';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    CommonModule,
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
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditvindataPage
      }
    ])
  ],
  declarations: [EditvindataPage]
})
export class EditvindataPageModule {}
