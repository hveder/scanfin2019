import { Injectable } from '@angular/core';
import { WebservicecallsTokenanager } from '../webservicecalls/webservicecalls.tokenmanager';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

class WebServiceCredentials {
  constructor(public tokensecret: string,
              public salt: string) {}
}

class WebServiceListMake {
  constructor(public key: string,
              public value: string) {}
}
class WebServiceListModell {
  constructor(public key: string,
              public value: string,
              public parent_key: string) {}
}
class WebServiceListFuelltype {
  constructor(public key: string,
              public value: string) {}
}
class WebServiceListColor {
  constructor(public key: string,
              public value: string) {}
}
class WebServiceListVehicletype {
  constructor(public key: string,
              public value: string) {}
}
class WebServiceListTransmission {
  constructor(public key: string,
              public value: string) {}
}
class WebServiceListBodytype {
  constructor(public key: string,
              public value: string) {}
}
class WebServiceRangesMileage {
  constructor(public min: number,
              public max: number) {}
}
class WebServiceRangesPower {
  constructor(public min: number,
              public max: number) {}
}
class WebServiceRangesCcm {
  constructor(public min: number,
              public max: number) {}
}
class WebServiceRangesCo2 {
  constructor(public min: number,
              public max: number) {}
}
class WebServiceRangesPriceGross {
  constructor(public min: number,
              public max: number) {}
}
class WebServiceRangesDateFirstreg {
  constructor(public min: number,
              public max: number) {}
}
class WebServiceLists {
  constructor(public make: WebServiceListMake[],
              public modell: WebServiceListModell[],
              public fuelltype: WebServiceListFuelltype[],
              public bodytype: WebServiceListBodytype[],
              public color: WebServiceListColor[],
              public vehicletype: WebServiceListVehicletype[],
              public transmssion: WebServiceListTransmission[]) {}
}
class WebServiceQuery {
    constructor(public make_id: number,
                public modell_id: number
    ) {}
}





@Injectable({
  providedIn: 'root'
})
export class RmtWebServiceService {
  constructor(private http: HttpClient) { }



  static readonly apiRoot = 'https://api.romoto.de/v_romoto_app/webservice/';
  static readonly apiToken = 'qOINKtbV0R67kVUCax8rMTBbdimm8-bC';

  static readonly loginQry = 'login';
  static readonly listsQry = 'lists';
  static readonly queryQry = 'query';
  static readonly rangesQry = 'ranges';
  static readonly searcableequipmentQry = 'get-searchable-equipment';

  make: Observable<WebServiceListMake[]>;
  modell: Observable<WebServiceListModell[]>;
  fueltype: Observable<WebServiceListFuelltype[]>;
  lists: any;
  ranges: any;
  query: any;
  equipment: any;
  resultsCredentials: WebServiceCredentials;

  fnlogin() {

    const promise = new Promise<WebServiceCredentials>((resolve, reject) => {
      const apiURL = `${RmtWebServiceService.apiRoot}${RmtWebServiceService.loginQry}?access-token=${RmtWebServiceService.apiToken}`;
      const tm = new WebservicecallsTokenanager();

      this.http.get(apiURL).toPromise()
          .then(

              (res: WebServiceCredentials) => {
               this.processFetchedData(res);
               tm.store(res);
                 resolve();
                },
              msg => {
                // Error
                console.log('datas');
                reject(msg);
              }
          );
    });
    return promise;

  }





    fnSearchableEquipment() {
        const tmCL = new WebservicecallsTokenanager();
        const tm = tmCL.retrieve().then(data => {
            const form = {
                salt: data.salt,
                tokensecret: data.tokensecret
            };

            const apiURL = `${RmtWebServiceService.apiRoot}${RmtWebServiceService.searcableequipmentQry}`;

            const paramsData = form;

            paramsData.tokensecret = data.tokensecret;
            paramsData.salt = data.salt;




            const promise = new Promise((resolve, reject) => {
                this.http
                    .get( apiURL, { params:  paramsData } )
                    .toPromise()
                    .then(
                        (res: any) => {
                            console.log(res);
                            // this.make  = res.make;
                            this.processFetchLists(res);
                            resolve();
                            // this.oLists = res;
                        },
                        msg => {
                            reject(msg);

                        }
                    );
            });
            return  promise;

        });
    }

  processFetchedData(res: any) {
      this.resultsCredentials = (res as WebServiceCredentials) ; // check the console
  }
  returnCredenmtials() {
      return this.resultsCredentials;
  }

  processFetchLists(res: any) {
    this.lists = res;
  }

  processFetchRanges(res: any) {
        this.ranges = res;
  }

  processFetchQuery(res: any) {
        this.query = res;
  }

  fnListsWithParams(form: any = {}) {
    const tmCL = new WebservicecallsTokenanager();
    const tm = tmCL.retrieve().then(data => {
        form.salt = data.salt;
        form.tokensecret = data.tokensecret;

        const apiURL = `${RmtWebServiceService.apiRoot}${RmtWebServiceService.listsQry}`;

        const paramsData = form;

        paramsData.tokensecret = data.tokensecret;
        paramsData.salt = data.salt;

        const promise = new Promise((resolve, reject) => {
                this.http
                    .get( apiURL, { params:  paramsData } )
                    .toPromise()
                    .then(
                        (res: any) => {
                            console.log(res);
                            // this.make  = res.make;
                            this.processFetchLists(res);
                            resolve();
                            // this.oLists = res;
                        },
                        msg => {
                            reject(msg);

                        }
                    );
            });
            return  promise;

        });
    }


    fnQueryWithParams(form: any = {}) {
        const tmCL = new WebservicecallsTokenanager();
        const tm = tmCL.retrieve().then(data => {

            form.salt = data.salt;
            form.tokensecret = data.tokensecret;

            const apiURL = `${RmtWebServiceService.apiRoot}${RmtWebServiceService.queryQry}`;

            const paramsData = form;

            paramsData.tokensecret = data.tokensecret;
            paramsData.salt = data.salt;
            ;

            const promise = new Promise((resolve, reject) => {
                this.http
                    .get( apiURL, { params:  paramsData } )
                    .toPromise()
                    .then(
                        (res: any) => {
                            console.log(res);
                            // this.make  = res.make;
                            this.processFetchQuery(res);
                            resolve();
                            // this.oLists = res;
                        },
                        msg => {
                            reject(msg);

                        }
                    );
            });
            return  promise;

        });
    }


    fnRangesWithParams(form: any = {})  {
        const tmCL = new WebservicecallsTokenanager();
        const tm = tmCL.retrieve().then(data => {

            form.salt = data.salt;
            form.tokensecret = data.tokensecret;

            const apiURL = `${RmtWebServiceService.apiRoot}${RmtWebServiceService.rangesQry}`;

            const paramsData = form;

            paramsData.tokensecret = data.tokensecret;
            paramsData.salt = data.salt;
            ;

            const promise = new Promise((resolve, reject) => {
                this.http
                    .get( apiURL, { params:  paramsData } )
                    .toPromise()
                    .then(
                        (res: any) => {
                            console.log(res);
                            // this.make  = res.make;
                            this.processFetchRanges(res);
                            resolve();
                            // this.oLists = res;
                        },
                        msg => {
                            reject(msg);

                        }
                    );
            });
            return  promise;

        });
    }


}
