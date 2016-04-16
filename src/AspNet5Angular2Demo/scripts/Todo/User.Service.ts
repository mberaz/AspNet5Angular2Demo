
import {Injectable} from 'angular2/core';
import {Http, HTTP_BINDINGS, Headers, RequestOptions, Response} from "angular2/http";
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

 @Injectable()
export class UserService {
    constructor(private http: Http) {
    }
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
        return Promise.resolve(fetch(url).then(resp => resp.json()));
    };

    createUser(data:string, http: Http) {
        var config = new Config();
        let headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });

        return http.post(config.apiBaseUrl + "User", data , options).toPromise();
    };

}