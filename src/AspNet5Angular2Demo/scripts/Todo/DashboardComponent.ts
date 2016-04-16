/// <reference path="note.ts" />
/// <reference path="note.component.ts" />

import {NoteComponent} from './note.component';
import {NoteService} from './note.service';
import {Component } from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-dashboard',
    templateUrl: "/Todo/Dashboard.html",
    providers: [
        NoteService
    ],
    directives: [NoteComponent]
})
export class DashboardComponent implements OnInit {

    public noteService: NoteService;

    constructor(  _noteService: NoteService) {
        this.noteService = _noteService;
    }

    ngOnInit() {
        this.noteService.getNotes().then(results => {
            this.loadNotes(results[0]);
        });
    }

    loadNotes = function (data: any) {
        this.notes = new Array<Note>();
        for (var i = 0; i < data.length; i++) {
            this.notes.push(new Note(data[i].Id, data[i].Text, data[i].Color));
        }
    }
}