import {Component, Injectable} from 'angular2/core';
import {IonicApp, IONIC_DIRECTIVES} from 'ionic-angular';
import {Validators, Control, ControlGroup, FORM_DIRECTIVES, DefaultValueAccessor, ControlValueAccessor} from 'angular2/common';
import {User} from './../../providers/user/user';
import {LoginProvider} from './../../providers/login/login';
import {CircleLoader} from './../../components/loader/loader';

@Injectable()
@Component({
  selector: 'login-form',
  templateUrl: 'build/pages/login/login-form.component.html',
  directives: [FORM_DIRECTIVES, IONIC_DIRECTIVES, CircleLoader],
  providers: [LoginProvider]
})
export class LoginForm {

  public model = new User('admin', 'admin');
  public formGroup: ControlGroup;
  private submitted: boolean = false;
  public loginProvider: any;
  public stateOnload: boolean = false;

  constructor(loginProvider: LoginProvider) {
    this.formGroup = new ControlGroup({
      username: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });
    this.loginProvider = loginProvider;
  }

  validate() {
    return this.formGroup.valid;
  }

  onSubmit() {
    this.submitted = true;
    this.stateOnload = true;
    this.loginProvider.load(this.model).then(user => {
      console.log(user);
      setTimeout(function() {
        this.stateOnload = false;
      }.bind(this), 500);

    }).catch(err => {
      console.error(err)
      this.stateOnload = false;
    });
  }

  get value(): string { return JSON.stringify(this.model, null, 2); }
}