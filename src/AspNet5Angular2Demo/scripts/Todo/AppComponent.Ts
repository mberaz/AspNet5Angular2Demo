/// <reference path="todocomponent.ts" />
import {Component } from 'angular2/core';
import {TodoComponent} from './TodoComponent';
import {DashboardComponent} from './DashboardComponent';
import {UserListComponent} from './User/UserListComponent';
import {UserEditComponent} from './User/UserEditComponent';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
@Component({
    selector: 'my-app',
    templateUrl: "/Todo/TodoApp.html",
    directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true 
    },
    {
        path: '/todo',
        name: 'Todo',
        component: TodoComponent
    },
    {
        path: '/user',
        name: 'User',
        component: UserListComponent
    },
    {
        path: '/user/:id',
        name: 'UserDetail',
        component: UserEditComponent
    }
])
export class AppComponent {
    title = 'MIchaels new TODO app';
}