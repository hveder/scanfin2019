import { Injectable } from '@angular/core';
import { WebservicecallsTokenanager } from '../webservicecalls/webservicecalls.tokenmanager';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';


class Webmobil24Credentials {
  constructor(public wm24_dealer_id: number,
              public wm24_dealer_login: string,
              public token: string,
              public company: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class Webmobil24LoginService {
  constructor(private http: HTTP) { }
  static readonly apiRoot = '/scanfin/auth_dealer.php';

  token: any ;
  credentials: Webmobil24Credentials;

  fnWm24Login( username ,  password ) {

    const that = this;
    const promise = new Promise<Webmobil24Credentials>((resolve, reject) => {
      const apiURL = `${Webmobil24LoginService.apiRoot}`;
      const tm = new WebservicecallsTokenanager();

      const paramsData = {
        'username' : username,
        'password' : password
      } ;
            console.log(paramsData);
            console.log( this.http.get(apiURL, JSON.stringify(paramsData),{} ));
       this.http.get<string>(apiURL, { params:  paramsData },{} ).then(
           (res) => {
           console.log(res); },
           (msg) => { console.log(msg); });
       /*   .then(

              (res: Webmobil24Credentials) => {
                this.credentials = res;
                tm.store_wm24_login_datas(res);
                resolve(res);
              }).catch(
           (msg) => {
                  this.token = msg;
                // Error
                              reject(msg);
              }
          );*/
    }
    );
    return promise.then((res) => {
            return this.credentials;
    }, () => {
            return this.credentials;

    }
       ).finally(()=>{
           return this.credentials;
    });
  }

  async  callfnWm24Login(username: string ,  password: string ) {
      console.log(username,password);
       await this.fnWm24Login( username ,  password );
      return this.credentials;
  }

  setToken(cLog: any) {
    this.token = cLog;
  }

}
