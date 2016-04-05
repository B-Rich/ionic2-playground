import {Page, NavController} from 'ionic-angular';
import {Inject} from 'angular2/core';
import {LoginForm} from './../../components/login-form/login-form.component';
import {LoginProvider} from './../../providers/login/login';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {RelutionUserProvider} from './../../providers/relution/relution-user';
import {UserPage} from './../user/user';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login/login.html',
  directives: [LoginForm],
  pipes: [TranslatePipe]
})
export class LoginPage {
  public nav: any = NavController;
  public loginService: LoginProvider;

  constructor(@Inject(NavController) nav, loginService: LoginProvider) {
    this.nav = nav;
    this.loginService = loginService;
    this.loginService.afterLogin.subscribe(this.afterLogin.bind(this));
  }

  afterLogin(evt) {
    if (evt.length && evt[0]) {
      this.nav.push(UserPage);
    }
  }
}
