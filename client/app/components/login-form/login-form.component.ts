import {Component, Injectable, EventEmitter} from 'angular2/core';
import {IonicApp, IONIC_DIRECTIVES} from 'ionic-angular';
import {Validators, Control, ControlGroup, FORM_DIRECTIVES, DefaultValueAccessor, ControlValueAccessor} from 'angular2/common';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

import {LoginUser} from './../../providers/user/login-user';
import {LoginProvider} from './../../providers/login/login';
import {RelutionUserProvider} from './../../providers/relution/relution-user';
import {CircleLoader} from './../../components/loader/loader';

@Injectable()
@Component({
  selector: 'login-form',
  outputs: ['afterLogin'],
  pipes: [TranslatePipe],
  templateUrl: 'build/components/login-form/login-form.component.html',
  directives: [FORM_DIRECTIVES, IONIC_DIRECTIVES, CircleLoader]
})
export class LoginForm {
  public afterLogin: any = new EventEmitter();
  public model = new LoginUser('admin', 'admin');
  public formGroup: ControlGroup;
  private submitted: boolean = false;
  public loginProvider: any;
  public stateOnload: boolean = false;
  private relutionUser: RelutionUserProvider;

  constructor(loginProvider: LoginProvider, relutionUser: RelutionUserProvider) {
    this.formGroup = new ControlGroup({
      username: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });
    this.loginProvider = loginProvider;
    this.relutionUser = relutionUser;
  }

  validate() {
    return this.formGroup.valid;
  }

  onSubmit() {
    this.submitted = true;
    this.stateOnload = true;
    this.loginProvider.load(this.model).then(resp => {
      this.relutionUser.user = resp.user;
      setTimeout(function() {
        console.log(this.relutionUser.get('type'));
        this.stateOnload = false;
      }.bind(this), 500);

    }).catch(err => {
      console.error(err)
      this.stateOnload = false;
    });
  }

  get value(): string { return JSON.stringify(this.model, null, 2); }

}
