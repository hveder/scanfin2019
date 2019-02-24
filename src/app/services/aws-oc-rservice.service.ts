import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import {WebservicecallsTokenanager} from '../webservicecalls/webservicecalls.tokenmanager';

class VinPictureRequest {
  constructor(public vin_picture: string,
              public debug: string,
              public dealer_id: number
  ) {}
}


import {RequestOptions, Request, Headers } from '@angular/http';
import {promise} from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})export class AwsOcRServiceService {

  constructor(private http: HTTP) { }

  static readonly  AWS_Url = 'https://api.ico-international.de/vinpd/dev/detect';

  vins: any[];



   callfnDetectVin(base64img: string ) {
    return this.fnDetectVin( base64img ).then( (res) => {
        return this.vins;
    }, (msg) => {
        return false;
    });

  }

  fnDetectVin(base64img: string ) {
    const that = this;
    const promiseOuter = new Promise((resolve, reject) => {
    const apiURL = `${AwsOcRServiceService.AWS_Url}`;
    const tm = new WebservicecallsTokenanager();
     // tm.retrieve_wm24_login_datas();
    const promiseInner = tm.retrieve_wm24_login_datas().then((res: any) => {


          const _params3 = {'debug': true ,
            'vin_picture': base64img ,
            'dealer_id': res.wm24_dealer_id  };


        this.http.post(apiURL, _params3 ,{  'Content-Type' : 'application/json',
            'Accept': 'text/html, application/xhtml+xml, application/json, application/xml;q=0.9, */*;q=0.8',
            'Access-Control-Allow-Origin': '*' ,
            'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE, PATCH' ,
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, x-auth,Content-Type, Content-Range, Content-Disposition, Content-Description',
            'x-api-key': 'EvuHxr7P9F1AR9kAKBrow1p44Gpab65p2jXgeqIK' }   )
            .then((res: any) => {
                        console.log(res);
                this.setVins(res.vins);
                resolve();
            }).catch(
            (msg)=> {
          console.log(msg);
          reject();
        });


    },(msg) => {
        console.log(msg);
         return false;
     });
       return promiseInner;
    });
    return promiseOuter.then(()=>{return this.vins},() => {return false});
  }

  setVins(vins: any){
      this.vins = vins;
  };

}
