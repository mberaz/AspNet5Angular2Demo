/// <reference path="todocomponent.ts" />
import { Component } from 'angular2/core';
import {TodoComponent} from './TodoComponent';
import {DashboardComponent} from './DashboardComponent';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
@Component({
    selector: 'my-app',
    templateUrl: "/Todo/TodoApp.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
    ]

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
])
export class AppComponent {
    title = 'MIchaels new TODO app';
}