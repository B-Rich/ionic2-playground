import {Component, Injectable} from 'angular2/core';
import {IonicApp, IONIC_DIRECTIVES} from 'ionic-angular';
import {Validators, Control, ControlGroup, FORM_DIRECTIVES, DefaultValueAccessor, ControlValueAccessor} from 'angular2/common';
import {LoginUser} from './../../providers/user/login-user';
import {LoginProvider} from './../../providers/login/login';
import {RelutionUserProvider} from './../../providers/relution/relution-user';
import {CircleLoader} from './../../components/loader/loader';

@Injectable()
@Component({
  selector: 'login-form',
  templateUrl: 'build/components/login-form/login-form.component.html',
  directives: [FORM_DIRECTIVES, IONIC_DIRECTIVES, CircleLoader],
  providers: [LoginProvider, RelutionUserProvider]
})
export class LoginForm {

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
      RelutionUserProvider.user = resp.user;
      setTimeout(function() {
        //RelutionUserProvider.user.get('type')
        this.stateOnload = false;
      }.bind(this), 500);

    }).catch(err => {
      console.error(err)
      this.stateOnload = false;
    });
  }

  get value(): string { return JSON.stringify(this.model, null, 2); }
}