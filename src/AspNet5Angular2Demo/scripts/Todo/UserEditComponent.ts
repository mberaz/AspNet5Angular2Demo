/// <reference path="user.ts" />

import {Component} from 'angular2/core';
import {RouteParams } from 'angular2/router';
import {Input, OnInit } from 'angular2/core';
import {UserService} from './User.service';



@Component({
    selector: 'user-item',
    templateUrl: "/Todo/UserEdit.html",

    providers: [
        UserService
    ],
})
export class UserEditComponent implements OnInit {
    user: User;
    public UserService: UserService;
    constructor(_UserService: UserService,
        private _routeParams: RouteParams) {
        this.UserService = _UserService;
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.UserService.getUser(id)
            .then(user => this.loadAUser(user)  );
    }

    loadAUser(data: any) {
        this.user = new User(data.Id, data.FullName, data.Email, data.Password)
    }

    goBack() {
        window.history.back();
    }
}