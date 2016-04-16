/// <reference path="User.component.ts" />
/// <reference path="user.service.ts" />
/// <reference path="user.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var User_component_1 = require('./User.component');
var User_service_1 = require('./User.service');
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var UserListComponent = (function () {
    function UserListComponent(_UserService, _router) {
        this._router = _router;
        this.loadUsers = function (data) {
            this.Users = new Array();
            for (var i = 0; i < data.length; i++) {
                this.Users.push(new User(data[i].Id, data[i].FullName, data[i].Email, data[i].Password));
            }
        };
        this.UserService = _UserService;
        this.router = _router;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UserService.getUsers().then(function (results) {
            _this.loadUsers(results[0]);
        });
    };
    UserListComponent.prototype.gotoDetail = function (user) {
        var link = ['UserDetail', { id: user.id }];
        this.router.navigate(link);
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: "/Todo/userList.html",
            providers: [
                User_service_1.UserService
            ],
            directives: [User_component_1.UserComponent]
        }), 
        __metadata('design:paramtypes', [User_service_1.UserService, router_1.Router])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=UserListComponent.js.map