/// <reference path="user.ts" />

import {Component} from 'angular2/core';
import {RouteParams } from 'angular2/router';
import {Input, OnInit } from 'angular2/core';
import {UserService} from './User.service';
import {Http, HTTP_BINDINGS, Headers, RequestOptions, Response} from "angular2/http";
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
    selector: 'user-item',
    templateUrl: "/Todo/UserEdit.html",
    providers: [
        HTTP_PROVIDERS,
        UserService
    ],
})
export class UserEditComponent implements OnInit {
    user: User;
    public http: any;
    public UserService: UserService;
    constructor(_UserService: UserService,
        private _routeParams: RouteParams,
        _http: Http) {
        this.UserService = _UserService;
        this.http=_http;
    }

    ngOnInit() {
        let id = +this._routeParams.get("id");
        this.UserService.getUser(id)
            .then(user=> this.loadAUser(user));
    }

    loadAUser(data: any) {
        this.user = new User(data.Id, data.FullName, data.Email, data.Password)
    }

    goBack() {
        window.history.back();
    }

    SaveNewUser(user: User) {
        this.UserService.createUser(JSON.stringify(user), this.http).then(user => this.extractData(user));
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error("Bad response status: " + res.status);
        }
        let body = res.json();
        var data = body.data || {};

        alert("ok");
    }
}