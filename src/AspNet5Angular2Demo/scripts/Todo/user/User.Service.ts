
import {Injectable} from 'angular2/core';
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