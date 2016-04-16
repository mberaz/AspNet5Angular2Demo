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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var User_service_1 = require('./User.service');
var UserEditComponent = (function () {
    function UserEditComponent(_UserService, _routeParams) {
        this._routeParams = _routeParams;
        this.UserService = _UserService;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get('id');
        this.UserService.getUser(id)
            .then(function (user) { return _this.loadAUser(user); });
    };
    UserEditComponent.prototype.loadAUser = function (data) {
        this.user = new User(data.Id, data.FullName, data.Email, data.Password);
    };
    UserEditComponent.prototype.goBack = function () {
        window.history.back();
    };
    UserEditComponent.prototype.SaveNewUser = function (user) {
    };
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'user-item',
            templateUrl: "/Todo/User/UserEdit.html",
            providers: [
                User_service_1.UserService
            ],
        }), 
        __metadata('design:paramtypes', [User_service_1.UserService, router_1.RouteParams])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=UserEditComponent.js.map