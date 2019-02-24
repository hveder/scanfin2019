import { Injectable } from '@angular/core';
import { WebservicecallsTokenanager } from '../webservicecalls/webservicecalls.tokenmanager';
import { HTTP } from '@ionic-native/http/ngx';
import {HttpParams} from '@angular/common/http';


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
  static readonly apiRoot = 'https://tools.webmobil24.com/scanfin/auth_dealer.php';

  token: any ;
  credentials: Webmobil24Credentials;

  fnWm24Login( username ,  password ) {

    const that = this;
    const promise = new Promise<Webmobil24Credentials>((resolve, reject) => {
      const apiURL = `${Webmobil24LoginService.apiRoot}`;
      const tm = new WebservicecallsTokenanager();

      const paramsData = {
        'username=' : username,
        'password' : password
      } ;
            let params = new HttpParams();
            params = params.append('username', username);
            params = params.append('password', password);



            this.http.get(apiURL,
                { params:  {
                    'username=' : username,
                    'password' : password
                    }
                } , {
                'Content-Type' : 'application/json',
                'Accept': 'text/html, application/xhtml+xml, application/json, application/xml;q=0.9, */*;q=0.8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, x-auth,Content-Type, Content-Range, Content-Disposition, Content-Description',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE, PATCH'}
                ) .then(data => {

                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);

            }).catch(error => {

                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);

                });
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
       ).finally(() => {
           return this.credentials;
    });
  }

  async  callfnWm24Login(username: string ,  password: string ) {
      console.log(username, password);
       await this.fnWm24Login( username ,  password );
      return this.credentials;
  }

  setToken(cLog: any) {
    this.token = cLog;
  }

}
