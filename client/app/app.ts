/// <reference path="../typings/main.d.ts" />

import {App, Platform} from 'ionic-angular';
import {LoginPage} from './pages/login/login';
// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';
import {BrowserXhr, HTTP_PROVIDERS} from "angular2/http";
import {Injectable, provide} from "angular2/core";

//workarround for set credentials true
//@link https://github.com/angular/http/issues/65
@Injectable()
class CORSBrowserXHR extends BrowserXhr {
  build(): any {
    var xhr: any = super.build();
    xhr.withCredentials = true;
    return xhr;
  }
}

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {
    serverUrl: 'https://10.21.4.52'
  },
  providers: [HTTP_PROVIDERS, provide(BrowserXhr, { useClass: CORSBrowserXHR })]
})
export class MyApp {
  rootPage: Type = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }
}
