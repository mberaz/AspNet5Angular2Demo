/// <reference path="../../node_modules/angular2/http.d.ts" />
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
//import {Http, HTTP_BINDINGS, Headers, RequestOptions, Response, HTTP_PROVIDERS} from "angular2/http";
//import {Observable}     from 'rxjs/Observable';
require('rxjs/Rx');
var UserService = (function () {
    function UserService() {
    }
    //constructor(private http: Http) { }
    UserService.prototype.getUsers = function () {
        var config = new Config();
        var urls = [config.apiBaseUrl + "User"];
        return Promise.all(urls.map(function (url) {
            return fetch(url).then(function (resp) { return resp.json(); });
        }));
    };
    ;
    UserService.prototype.getUser = function (id) {
        var config = new Config();
        var url = config.apiBaseUrl + "User/" + id;
        return Promise.resolve(fetch(url).then(function (resp) {
            return resp.json();
        }));
    };
    ;
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map