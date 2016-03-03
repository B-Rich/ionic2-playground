import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {Config} from 'ionic-angular';
import {User} from './../user/user';
/*
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginProvider {
  private url: string = '/gofer/security-login';
  public http: any = Http;
  public data: any = User;

  constructor( @Inject(Http) http, config: Config) {
    this.url = (config.get('serverUrl') + this.url);
  }

  load(data: User) {
    this.data = data;

    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

