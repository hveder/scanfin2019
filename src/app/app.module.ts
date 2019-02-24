import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar,StatusBarOriginal } from '@ionic-native/status-bar';
import { Webmobil24LoginService } from './services/webmobil24-login.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      IonicStorageModule.forRoot(),
      AppRoutingModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSortModule,
      MatTableModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      DragDropModule,
      ScrollingModule

  ],
  providers: [
      Webmobil24LoginService,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

      ],
    bootstrap: [AppComponent]
    })
export class AppModule {}
