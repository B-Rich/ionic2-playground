/**
 *{
        "uuid": "ADMIN",
        "type": "GROUP",
        "name": "ADMIN",
        "groupType": "SYSTEM_GROUP",
        "systemPermission": false
      }
 */

import {Injectable, Inject} from 'angular2/core';
@Injectable()
export class RelutionRolesObject {
  public uuid: string;
  public type: string;
  public name: string;
  public groupType: string;
  public systemPermission: boolean;
  constructor(attr){

  }
}
