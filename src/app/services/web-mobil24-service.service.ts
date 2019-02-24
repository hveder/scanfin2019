import { Injectable } from '@angular/core';
import {HttpClient, HttpInterceptor , HttpParams, HttpHeaders } from '@angular/common/http';
import {WebservicecallsTokenanager} from '../webservicecalls/webservicecalls.tokenmanager';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { HTTP } from '@ionic-native/http/ngx';

class CANZEIGE_ID {
  constructor(public ANZEIGE_ID: string ) {}
}
import {RequestOptions, Request, Headers } from '@angular/http';
import {promise} from 'selenium-webdriver';
class VinData {
  constructor() {}
  public root: {
          ACHSEN: string,
              ANTRIEB: string ,
              DATECODE: string ,
              DAT_FZA: string ,
              DAT_NAME_MARKE: string,
         ​  DAT_NAME_MODELL:  string ,
              DAT_NAME_MODELL_D:  string ,
         ​ DAT_NAME_VARIANTE: string ,
              DAT_NAME_VARIANTE_ZUSATZ: string,
         ​ ZYLINDER: string,
              GESAMTGEWICHT: string,
              GETRIEBE: string,
              HUBRAUM: string,
              ID: string,
              KATEGORIE: string ,
              KRAFTSTOFF: string,
              LEISTUNG: string,
              MARKE_ID: string,
              MARKE_NAME_D: string,
              MOTOR: string,
              NAME: string ,
              RADSTAND: string ,
              TUEREN: string ,
              VINFARBCODE: string ,
         ​  VINFARBE: string ,
              VINFARBID: string ,
              VINFARBMETALLIC: string ,
              AUSSTATTUNGEN: string, // HSN/TSN
              SONDERAUSSTATTUNGEN: string, // HSN/TSN
              VINSONDERAUSSTATTUNGEN: string, // VIN
              VINSONSTIGES: string, // VIN
              VINAUSSTATTUNGEN: string, // VIN
              ANZEIGE_BEMERKUNG: string,
              ANZEIGE_BEMERKUNG_ALL: string
  };
  }
class VinDataEdited {
  constructor() {}
      public root: {
          ACHSEN: string,
          ANTRIEB: string,
          DATECODE: string,
          DAT_FZA: string,
          DAT_NAME_MARKE: string,
          ​  DAT_NAME_MODELL: string,
          DAT_NAME_MODELL_D: string,
          ​ DAT_NAME_VARIANTE: string,
          DAT_NAME_VARIANTE_ZUSATZ: string,
          ​ ZYLINDER: string,
          GESAMTGEWICHT: string,
          GETRIEBE: string,
          HUBRAUM: string,
          ID: string,
          KATEGORIE: string,
          KRAFTSTOFF: string,
          LEISTUNG: string,
          MARKE_ID: string,
          MARKE_NAME_D: string,
          MOTOR: string,
          NAME: string,
          RADSTAND: string,
          TUEREN: string,
          VINFARBCODE: string,
          ​  VINFARBE: string,
          VINFARBID: string,
          VINFARBMETALLIC: string,
          ANZEIGE_BEMERKUNG: string[],
          ANZEIGE_BEMERKUNG_ALL: string[], ​
          SONDERAUSSTATTUNGEN: string[],
          VINAUSSTATTUNGEN: [],
          ​ VINSONDERAUSSTATTUNGEN: string[],
          ​ VINSONSTIGES: string[],
          AUSSTATTUNGEN: string[]
      };
 }

@Injectable({
  providedIn: 'root'
})export class WebMobil24ServiceService {
  get vinData(): any {
    return this._vinData;
  }

  set vinData(value: any) {
    this._vinData = value;
  }

    get ANZEIGE_ID(): any {
        return this._ANZEIGE_ID;
    }

    set ANZEIGE_ID(value: any) {
        this._ANZEIGE_ID = value;
    }


  constructor(private http: HTTP, private ngxXml2jsonService: NgxXml2jsonService) {
  }

  static readonly TOKEN_Url = '/web/de/secure/start/index.php';
  static readonly CREATE_AD = '/scanfin/create_ad.php' ;
  static readonly IMG_UPLOAD = '/scanfin/bilder_upload.php' ;

  token: any[];
  private _vinData: any;
  private _ANZEIGE_ID: any;

  async fetchVinData(vin: string) {
    return await  this.fnGetToken(vin).then(() => this.vinData, () => false);

  }

  setToken(token: any) {
    const tm = new WebservicecallsTokenanager();
    tm.storeWM24OcToken(token);
    this.token = token;
  }

  fnGetToken(vin: string) {
    const that = this;
    const promiseOuter = new Promise((resolve, reject) => {
      const tm = new WebservicecallsTokenanager();
      // tm.retrieve_wm24_login_datas();
      const promiseInner = tm.retrieve_wm24_login_datas().then((res: any) => {


        const clog = `${res.wm24_dealer_login}#${res.token}`;
        const VIN = 'WBA5J71060D698498';
        const NEU = '1';
        const KundenFIN = '0';
        const _params3 = { 'clog': clog, 'VIN': VIN, 'NEU': NEU , 'KundenFIN': KundenFIN };
        const apiURL = `${WebMobil24ServiceService.TOKEN_Url}` ; // ?clog=${clog}&VIN=${VIN}&NEU=${NEU}&KundenFIN=${KundenFIN}`;
        console.log(apiURL);

        this.http.get<string>(apiURL, {
            params: _params3
            }, {})

            .then(( res:  string) => {

              tm.store_vin_data(VIN, res );

              tm.get_vin_data( VIN )
                  .then((res: any ) => true, (msg) => false );


              const parser = new DOMParser();
              const xml = parser.parseFromString(res, 'text/xml');
              const obj: VinData = new VinData();
              Object.assign(obj, this.ngxXml2jsonService.xmlToJson(xml));
              const parser2 = new DOMParser();
              const obj2: VinDataEdited = new VinDataEdited();
              Object.assign(obj2, {
                'root': {
                    ACHSEN: obj.root.ACHSEN,
                    ANTRIEB: obj.root.ANTRIEB,
                    DATECODE: obj.root.DATECODE,
                    DAT_FZA: obj.root.DAT_FZA,
                    DAT_NAME_MARKE: obj.root.DAT_NAME_MARKE,
                    DAT_NAME_MODELL: obj.root.DAT_NAME_MODELL,
                    DAT_NAME_MODELL_D: obj.root.DAT_NAME_MODELL_D,
          ​          DAT_NAME_VARIANTE: obj.root.DAT_NAME_VARIANTE,
                    DAT_NAME_VARIANTE_ZUSATZ: obj.root.DAT_NAME_VARIANTE_ZUSATZ,
                    ZYLINDER: obj.root.ZYLINDER,
                    GESAMTGEWICHT: obj.root.GESAMTGEWICHT,
                    GETRIEBE: obj.root.GETRIEBE,
                    HUBRAUM: obj.root.HUBRAUM,
                    ID: obj.root.ID,
                    KATEGORIE: obj.root.KATEGORIE,
                    KRAFTSTOFF: obj.root.KRAFTSTOFF,
                    LEISTUNG: obj.root.LEISTUNG,
                    MARKE_ID: obj.root.MARKE_ID,
                    MARKE_NAME_D: obj.root.MARKE_NAME_D,
                    MOTOR: obj.root.MOTOR,
                    NAME: obj.root.NAME,
                    RADSTAND: obj.root.RADSTAND,
                    TUEREN: obj.root.TUEREN,
                    VINFARBCODE: obj.root.VINFARBCODE,
                    VINFARBE: obj.root.VINFARBE,
                    VINFARBID: obj.root.VINFARBID,
                    VINFARBMETALLIC: obj.root.VINFARBMETALLIC,
                    AUSSTATTUNGEN: obj.root.AUSSTATTUNGEN.split('|'),
                    SONDERAUSSTATTUNGEN: obj.root.SONDERAUSSTATTUNGEN.split('|'),
                    VINSONDERAUSSTATTUNGEN: obj.root.VINSONDERAUSSTATTUNGEN.split('|'),
                    VINAUSSTATTUNGEN: obj.root.VINAUSSTATTUNGEN.split('|'),
                    VINSONSTIGES: obj.root.VINSONSTIGES.split('|'),
                    ANZEIGE_BEMERKUNG: obj.root.ANZEIGE_BEMERKUNG.split('|'),
                    ANZEIGE_BEMERKUNG_ALL: obj.root.ANZEIGE_BEMERKUNG_ALL.split('|'),
                }

              });
                that.vinData = obj2.root;
                this.setToken(res);
                resolve();


              }, (msg: any) => {
              console.log(msg);
              reject();
          });


      }, (msg) => {
        return false;
      });
    });
    return promiseOuter.then((res: any) => {
      return this.vinData; },
        (msg) => false);
  }

  storeVehicleData(vehicleData) {
      console.log(vehicleData);
      const promiseOuter = new Promise((resolve, reject) => {
          const tm = new WebservicecallsTokenanager();
          // tm.retrieve_wm24_login_datas();
          const promiseInner = tm.retrieve_wm24_login_datas().then((res) => {

              const clog = `${res.wm24_dealer_login}%23${res.token}`;
              vehicleData.clog = clog;
              const apiURL = `${WebMobil24ServiceService.CREATE_AD}`;

              const vinDatas = this.vinData;

              vinDatas.clog = clog;
              vinDatas.ANZEIGE_EZ = vehicleData.ANZEIGE_EZ;
              vinDatas.ANZEIGE_KMSTAND = vehicleData.ANZEIGE_KMSTAND;
              vinDatas.ANZEIGE_FAHRGESTELLNUMMER = 'WBA5J71060D698498'; // vehicleData.ANZEIGE_FAHRGESTELLNUMMER;
              vinDatas.VINAUSSTATTUNGEN = vehicleData.VINAUSSTATTUNGEN.join('|');
              vinDatas.VINSONDERAUSSTATTUNGEN = vehicleData.VINSONDERAUSSTATTUNGEN.join('|');


              vinDatas.AUSSTATTUNGEN =  this.vinData.AUSSTATTUNGEN.join('|');
              vinDatas.SONDERAUSSTATTUNGEN =  this.vinData.SONDERAUSSTATTUNGEN.join('|');
              vinDatas.VINSONSTIGES =  this.vinData.VINSONSTIGES.join('|');
              vinDatas.ANZEIGE_BEMERKUNG =   this.vinData.ANZEIGE_BEMERKUNG.join('|');
              vinDatas.ANZEIGE_BEMERKUNG_ALL =   this.vinData.ANZEIGE_BEMERKUNG_ALL.join('|');


          this.http.post(apiURL,  JSON.stringify(vinDatas) ,{} )

                  .then(( res) => {


                  }, (msg) => { console.log(msg); } );


          }, (msg) => {
              console.log(msg);
          });
      });
  }



   fnDetectVin(base64img: FormData ) {
        const that = this;
        const promiseOuter = new Promise((resolve, reject) => {
            const apiURL = `${WebMobil24ServiceService.IMG_UPLOAD}`;
            const tm = new WebservicecallsTokenanager();
            // tm.retrieve_wm24_login_datas();
            const promiseInner = tm.retrieve_wm24_login_datas().then((res: any) => {

                const clog = `${res.wm24_dealer_login}%23${res.token}`;

                const _params3 = {
                    'HAENDLER_ID': `${res.wm24_dealer_login}%23${res.token}`,
                    'clog': `${res.wm24_dealer_id}`,
                    'ANZEIGE_ID': base64img.get('ANZEIGE_ID') ,
                    'base64img': base64img.get('file')  };




                this.http.post(apiURL, JSON.stringify(_params3),{})
                     .then((res: any) => {
                        console.log(res);
                        //this.ANZEIGE_ID  =   res ;
                        resolve();
                    }, (msg: any) => {
                        console.log(msg);
                        reject();
                    });
                }, (msg) => {
                console.log(msg);
                return false;
            });
            return promiseInner;
        });
        return promiseOuter.then(() => this.ANZEIGE_ID, () => false);
    }


}
