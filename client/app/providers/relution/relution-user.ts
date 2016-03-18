'use strict';
/**
 * create a model for the Response user
"{
  "user": {
    "type": "USER",
    "uuid": "052DE-D770-4D37-AA46-9A31F0E0D8D1",
    "version": 47,
    "aclEntries": [],
    "name": "admin",
    "givenName": "System",
    "surname": "Administrator",
    "organizationUuid": "662F6ADA-4BC4-BBB0-60351625CBE4",
    "email": "noreply@mwaysolutions.com",
    "lastLoggedTime": 1458309163917,
    "passwordExpires": 1477566785000,
    "locked": false,
    "activated": true,
    "effectivePermissions": "*",
    "sysRoles": [],
    "roles": [
      "ADMIN"
    ],
    "readonly": false,
    "rolesObjects": [
      {
        "uuid": "ADMIN",
        "type": "GROUP",
        "name": "ADMIN",
        "groupType": "SYSTEM_GROUP",
        "systemPermission": false
      }
    ]
  }
}"
**/
import {Injectable, Inject} from 'angular2/core';
import {RelutionRolesObject} from './relution-roles-object';

class RelutionUser{
  constructor(
    public type:string,
    public uuid:string,
    public version:number,
    public aclEntries: any = [],
    public name:string,
    public givenName:string='',
    public surname:string='',
    public organizationUuid:string,
    public email:string,
    public lastLoggedTime:number,
    public passwordExpires:number,
    public locked:boolean,
    public activated:boolean,
    public effectivePermissions:string,
    public sysRoles: any = [],
    public roles: Array<string>,
    public readonly:boolean,
    public rolesObjects: Array<RelutionRolesObject>
  ){}
}

@Injectable()
export class RelutionUserProvider{
  public static user: RelutionUser;
}