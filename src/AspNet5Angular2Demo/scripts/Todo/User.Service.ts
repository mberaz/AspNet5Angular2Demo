/// <reference path="../../node_modules/angular2/http.d.ts" />

import {Injectable} from 'angular2/core';
//import {Http, HTTP_BINDINGS, Headers, RequestOptions, Response, HTTP_PROVIDERS} from "angular2/http";
//import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    //constructor(private http: Http) { }
    getUsers() {
        var config = new Config();
        var urls = [config.apiBaseUrl + "User"];
        return Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ));
    };

    getUser(id: number) {
        var config = new Config();
        var url = config.apiBaseUrl + "User/" + id;
        return Promise.resolve(fetch(url).then(resp => 
             resp.json()
        ))

    };
}