import {Injectable, Inject} from 'angular2/core';

/*
  User Model
*/
@Injectable()
export class User {
  constructor(
      public userName: string,
      public password: string
  ) { }
}

