import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {LoginPage} from './pages/login/login';
import {Type} from 'angular2/core';
import {BrowserXhr, HTTP_PROVIDERS, Http} from "angular2/http";
import {Injectable, provide} from "angular2/core";
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

import {RelutionUserProvider} from './providers/relution/relution-user';
import {LoginProvider} from './providers/login/login';

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
    serverUrl: 'https://10.21.4.52',
    env: 'dev'//env
  },
  pipes: [TranslatePipe],
  providers: [
    HTTP_PROVIDERS,
    provide(BrowserXhr, { useClass: CORSBrowserXHR }),
    RelutionUserProvider,
    LoginProvider,
    provide(TranslateLoader, {
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
    }),
    TranslateService
  ]
})
export class MyApp {
  rootPage: Type = LoginPage;

  constructor(platform: Platform, translate: TranslateService) {
    let userLang = 'de';
    translate.setDefaultLang('en');
    translate.use(userLang);
    platform.ready().then(() => {

    });
  }
}
