
/// <reference path="User.component.ts" />
/// <reference path="user.service.ts" />
/// <reference path="user.ts" />

import {UserComponent} from './User.component';
import {UserService} from './User.service';
import {Component } from 'angular2/core';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: "/Todo/userList.html",
    providers: [
        UserService
    ],
    directives: [UserComponent]
})
export class UserListComponent implements OnInit {

    public UserService: UserService;
    public router: Router;

    constructor(_UserService: UserService, private _router: Router) {
        this.UserService = _UserService;
        this.router = _router;
    }

    ngOnInit() {
        this.UserService.getUsers().then(results => {
            this.loadUsers(results[0]);
        });
    }

    loadUsers = function (data: any) {
        this.Users = new Array<User>();
        for (var i = 0; i < data.length; i++) {
            this.Users.push(new User(data[i].Id, data[i].FullName, data[i].Email, data[i].Password));
        }
    }

    gotoDetail(user: User) {
        let link = ['UserDetail', { id: user.id }];
        this.router.navigate(link);
    }
}