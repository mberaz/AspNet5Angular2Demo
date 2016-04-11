import {Injectable} from 'angular2/core';

@Injectable()
export class NoteService {
    getNotes() {
        var config = new Config();
        var urls = [config.apiBaseUrl + "Note"];
        return Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
    }

}