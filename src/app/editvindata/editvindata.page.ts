import {Component, ChangeDetectorRef, OnInit} from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { BrowserModule } from '@angular/platform-browser';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebMobil24ServiceService} from '../services/web-mobil24-service.service';
import { VinForm } from  '../datastructures/vinform';
import { MatExpansionModule } from '@angular/material/expansion';
import {ActivatedRoute, Router} from '@angular/router';
import {Validators, FormBuilder, FormGroup, FormControl, FormArray} from '@angular/forms';
const STORAGE_KEY = 'my_images';


class VinObj {
  constructor(
      public ACHSEN: string, public ANTRIEB: string, public DATECODE: string, public DAT_FZA: string, public DAT_NAME_MARKE: string, public DAT_NAME_MODELL:  string, public DAT_NAME_MODELL_D:  string, ​public DAT_NAME_VARIANTE: string, public DAT_NAME_VARIANTE_ZUSATZ: string, ​public ZYLINDER: string, public GESAMTGEWICHT: string, public GETRIEBE: string , public HUBRAUM: string , public ID: string, public KATEGORIE: string, public KRAFTSTOFF: string, public LEISTUNG: string, public MARKE_ID: string, public MARKE_NAME_D: string, public MOTOR: string, public NAME: string , public RADSTAND: string, public TUEREN: string, public VINFARBCODE: string,​ public VINFARBE: string , public VINFARBID: string, public VINFARBMETALLIC: string , public ANZEIGE_BEMERKUNG: [] , public ANZEIGE_BEMERKUNG_ALL: [],​public SONDERAUSSTATTUNGEN: [], public VINAUSSTATTUNGEN: [], public VINSONDERAUSSTATTUNGEN: [],​public VINSONSTIGES: [], public AUSSTATTUNGEN: []
) {}
}



@Component({
  selector: 'app-editvindata',
  styleUrls: ['editvindata.page.scss'],
  templateUrl: 'editvindata.page.html'
})
export class EditvindataPage  implements OnInit {
  constructor(private webMobil24ServiceService: WebMobil24ServiceService, public router: Router, public route: ActivatedRoute, private frmBuilder: FormBuilder) {
    this.vinData = new VinObj(
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', [] , [],​
                    [], [], [], [], []);
    this.createForm();
    this.webMobil24ServiceService.fetchVinData('111')
        .then(
            (res) => {
              Object.assign(this.vinData , this.webMobil24ServiceService.vinData);
              this.createForm();
              this.makeView();
            },
            (msg) => false);


  }
  ngOnInit() {

    this.vinData = new VinObj(
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', [] , [],​
                    [], [], [], [], []);
    this.createForm();
    this.webMobil24ServiceService.fetchVinData('111')
        .then(
            (res) => {
              Object.assign(this.vinData , this.webMobil24ServiceService.vinData);
              this.createForm();
              this.makeView();
            },
            (msg) => false);
  }

  get vinData(): VinObj {
    return this._vinData;
  }

  set vinData(value: VinObj) {
    this._vinData = value;
  }

  get ANZEIGE_FAHRGESTELLNUMMER() { return this.vinDataForm.get('ANZEIGE_FAHRGESTELLNUMMER'); }
  get ANZEIGE_KMSTAND() { return this.vinDataForm.get('ANZEIGE_KMSTAND'); }
  get ANZEIGE_EZ() { return this.vinDataForm.get('ANZEIGE_EZ'); }
  get VINAUSSTATTUNGEN() { return this.vinDataForm.get('VINAUSSTATTUNGEN'); }
  get VINSONDERAUSSTATTUNGEN() { return this.vinDataForm.get('VINSONDERAUSSTATTUNGEN'); }

  vinDataForm: FormGroup;


  private _vinData: VinObj;

  createForm() {



    if ( this.vinData.VINAUSSTATTUNGEN.length > 0 ) {

      const VINAUSSTATTUNGEN_vals = this.vinData.VINAUSSTATTUNGEN;




      const _VINAUSSTATTUNGEN = this.vinData.VINAUSSTATTUNGEN.map( (c) => {
        return { name: c , id: c, value: c } ;
      });
      const _VINSONDERAUSSTATTUNGEN = this.vinData.VINSONDERAUSSTATTUNGEN.map( (c) => {
        return { name: c , id: c, value: c } ;
      });



      this.vinDataForm = this.frmBuilder.group({
        ANZEIGE_FAHRGESTELLNUMMER: ['', Validators.required],
        ANZEIGE_KMSTAND: ['', Validators.required],
        ANZEIGE_EZ: ['', Validators.required],
        VINAUSSTATTUNGEN: new FormArray(_VINAUSSTATTUNGEN.map(c => new FormControl(false))),
        VINSONDERAUSSTATTUNGEN:  new FormArray(_VINSONDERAUSSTATTUNGEN.map(c => new FormControl(false)))
      });
    } else {
      const _VINAUSSTATTUNGEN = [1, 2, 3, 4].map( (c) => {
        // return { name: c , selected: false, id: c, value: c } ;
        let b =  new FormControl(false);
        b.setValue(c);
        return b;
      });
      const _VINSONDERAUSSTATTUNGEN = [1, 2, 3, 4].map( (c) => {
        let b =  new FormControl(false);
        b.setValue(c);
        return b;
      });
      this.vinDataForm = this.frmBuilder.group({
        ANZEIGE_FAHRGESTELLNUMMER: ['', Validators.required],
        ANZEIGE_KMSTAND: ['', Validators.required],
        ANZEIGE_EZ: ['', Validators.required],
        VINAUSSTATTUNGEN: new FormArray(_VINAUSSTATTUNGEN),
        VINSONDERAUSSTATTUNGEN:  new FormArray(_VINSONDERAUSSTATTUNGEN)
      });
    }
    console.log(  this.vinDataForm );
  }

  onSubmit() {
    if (this.vinDataForm.valid) {
      console.log('Form Submitted!');
      this.vinDataForm.reset();
    }
  }

  makeView() {
    console.log(this.vinData);
  }

  test() {
    if( this.vinDataForm.status == "VALID" ){
      this.webMobil24ServiceService.storeVehicleData(this.vinDataForm.value);
    }
  }


}
