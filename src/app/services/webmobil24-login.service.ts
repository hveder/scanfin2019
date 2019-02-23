import { Injectable } from '@angular/core';
import { WebservicecallsTokenanager } from '../webservicecalls/webservicecalls.tokenmanager';
import { HttpClient, HttpParams } from '@angular/common/http';



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
  constructor(private http: HttpClient) { }
  static readonly apiRoot = 'https://tools.webmobil24.com/scanfin/auth_dealer.php';

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

       return this.http.get(apiURL, { params:  paramsData } ).toPromise()
          .then(

              (res: Webmobil24Credentials) => {
                  console.log(res);
                this.credentials = res;
                tm.store_wm24_login_datas(res);
                resolve(res);
              },
              msg => {
                  this.token = msg;
                // Error
                              reject(msg);
              }
          );
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
       await this.fnWm24Login( username ,  password );
      return this.credentials;
  }

  setToken(cLog: any) {
    this.token = cLog;
  }

}
