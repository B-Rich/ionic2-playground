import {Injectable, Inject} from 'angular2/core';

/*
  User Model
*/
@Injectable()
export class LoginUser {
  constructor(
      public userName: string,
      public password: string
  ) { }
}

