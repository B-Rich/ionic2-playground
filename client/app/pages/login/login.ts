import {Page, NavController} from 'ionic-angular';
import {Inject} from 'angular2/core';
import {LoginForm} from './../../components/login-form/login-form.component';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login/login.html',
  directives: [LoginForm]
})
export class LoginPage {
  public nav: any = NavController;

  constructor(@Inject(NavController) nav) {
    this.nav = nav;
  }
}
