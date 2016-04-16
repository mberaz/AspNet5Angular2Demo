/// <reference path="user.ts" />

import {Component} from 'angular2/core';

@Component({
    selector: 'user-item',
    templateUrl: "/Todo/User/User.html",
    inputs: ['user']
})
export class UserComponent  {
    user: User;

}