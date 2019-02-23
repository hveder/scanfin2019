import { NgModule, Component, Injectable } from '@angular/core';

@Injectable()
export class WebservicecallsTokenanager {

    private tokenKey: string = 'rmt_app_token';
    private wm24_login_datas: string = 'spin_360_token';
    private wm24_ltoken: string = 'wm_24_token';
    private vin_Data: string = 'vin_';

    public store(content: Object) {
        localStorage.setItem(this.tokenKey, JSON.stringify(content));
    }

    public async retrieve() {
        let storedToken: string = localStorage.getItem(this.tokenKey);
        if (!storedToken) throw 'no token found';
        return JSON.parse(storedToken);
    }

    public store_wm24_login_datas(content: Object) {
        localStorage.setItem(this.wm24_login_datas, JSON.stringify(content));
    }

    public async retrieve_wm24_login_datas() {
        let storedToken: string = await localStorage.getItem(this.wm24_login_datas);
        if (!storedToken) throw 'no token found';
        return JSON.parse(storedToken);
    }

    public async storeWM24OcToken(content: Object){
        localStorage.setItem(this.wm24_ltoken, JSON.stringify(content));
    }

    public async store_vin_data(vin: string , xml: string){
        localStorage.setItem(this.vin_Data + vin, JSON.stringify(xml));
    }

    public async get_vin_data(vin: string ){
        let vinXml: string =  await  localStorage.getItem(this.vin_Data + vin );
        if (!vinXml) throw 'no token found';
        return JSON.parse(vinXml);
    }
}
