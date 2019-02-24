import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute} from '@angular/router';
import { WebservicecallsTokenanager } from '../webservicecalls/webservicecalls.tokenmanager';
import { Webmobil24LoginService } from '../services/webmobil24-login.service';




@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage  implements OnInit {

  constructor( private wm24Login: Webmobil24LoginService,  public router: Router, public route: ActivatedRoute) {

  }
  msg: string = "";
  wm24_credentials: any;
  credentials = {username: '', password: ''};
  username  =  'hendrikveder';
  password  =  'HTYKOq7R';


  loginChanged($event) {

    this.credentials[$event.target.name] = $event.target.value;

  }

  ngOnInit() {

    // this.redirect();
    this.credentials.username = '';
    this.credentials.password = '';
  }



  async sendCredentials(credentials) {
    console.log(credentials);
     await this.wm24Login.callfnWm24Login(credentials.username, credentials.password);
    this.redirect();

  }

  redirect() {
    const tm = new WebservicecallsTokenanager();
    console.tm();
    const promise = tm.retrieve_wm24_login_datas();
    this.router.navigate([ 'takevinphotos' ]);
  }

}
