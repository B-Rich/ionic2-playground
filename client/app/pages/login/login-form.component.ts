import {Component, Injectable} from 'angular2/core';
import {IonicApp, IONIC_DIRECTIVES} from 'ionic-angular';
import {Validators, Control, ControlGroup, FORM_DIRECTIVES, DefaultValueAccessor, ControlValueAccessor} from 'angular2/common';
import {User} from './../../providers/user/user';
import {LoginProvider} from './../../providers/login/login';
//,providers: [LoginProvider]
@Injectable()
@Component({
  selector: 'login-form',
  templateUrl: 'build/pages/login/login-form.component.html',
  directives: [FORM_DIRECTIVES, IONIC_DIRECTIVES],
  providers: [LoginProvider]
})
export class LoginForm {

  public model = new User('admin', 'admin');
  public formGroup: ControlGroup;
  private submitted: boolean = false;
  public loginProvider: LoginProvider;

  constructor(loginProvider: LoginProvider) {
    this.formGroup = new ControlGroup({
      username: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });
  }

  validate() {
    return this.formGroup.valid;
  }

  onSubmit() {
    this.submitted = true;
  }

  get value(): string { return JSON.stringify(this.model, null, 2); }
}