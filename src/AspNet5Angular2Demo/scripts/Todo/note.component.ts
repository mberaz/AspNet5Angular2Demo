import {Component} from 'angular2/core';

@Component({
    selector: 'note-item',
    templateUrl: "/Todo/noteItem.html",
    inputs: ['note']
})
export class NoteComponent {
    note: Note;
}