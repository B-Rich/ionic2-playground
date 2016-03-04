import {Component} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';

@Component({
  selector: 'circle-loader',
  template: `
  <figure blue>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </figure>`,
  directives: [IONIC_DIRECTIVES] // makes all Ionic directives available to your component
})
export class CircleLoader {}
