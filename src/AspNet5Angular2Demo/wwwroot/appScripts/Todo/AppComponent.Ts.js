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
/// <reference path="todocomponent.ts" />
var core_1 = require('angular2/core');
var TodoComponent_1 = require('./TodoComponent');
var DashboardComponent_1 = require('./DashboardComponent');
var UserListComponent_1 = require('./UserListComponent');
var UserEditComponent_1 = require('./UserEditComponent');
var router_1 = require('angular2/router');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'MIchaels new TODO app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "/Todo/TodoApp.html",
            directives: [router_1.ROUTER_DIRECTIVES],
        }),
        router_1.RouteConfig([
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: DashboardComponent_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/todo',
                name: 'Todo',
                component: TodoComponent_1.TodoComponent
            },
            {
                path: '/user',
                name: 'User',
                component: UserListComponent_1.UserListComponent
            },
            {
                path: '/user/:id',
                name: 'UserDetail',
                component: UserEditComponent_1.UserEditComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=AppComponent.Ts.js.map