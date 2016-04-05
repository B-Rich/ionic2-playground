import {Page, NavController} from 'ionic-angular';
import {Inject} from 'angular2/core';
import {NgFor, NgIf} from 'angular2/common';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {RelutionUserProvider} from './../../providers/relution/relution-user';
/*
  Generated class for the UserPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/user/user.html',
  pipes: [TranslatePipe],
  directives:[NgFor, NgIf]
})
export class UserPage {
  public nav: any = NavController;
  public relutionUserProvider: RelutionUserProvider;

  constructor(RelutionUserProvider:RelutionUserProvider, @Inject(NavController) nav) {
    this.nav = nav;
    this.relutionUserProvider = RelutionUserProvider;
    console.log(this.relutionUserProvider);
  }

  keys() : Array<string> {
    return Object.keys(this.relutionUserProvider.user);
  }
}
