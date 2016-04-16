/// <reference path="note.ts" />
/// <reference path="note.component.ts" />
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
var note_component_1 = require('./note.component');
var note_service_1 = require('./note.service');
var core_1 = require('angular2/core');
var DashboardComponent = (function () {
    function DashboardComponent(_noteService) {
        this.loadNotes = function (data) {
            this.notes = new Array();
            for (var i = 0; i < data.length; i++) {
                this.notes.push(new Note(data[i].Id, data[i].Text, data[i].Color));
            }
        };
        this.noteService = _noteService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteService.getNotes().then(function (results) {
            _this.loadNotes(results[0]);
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: "/Todo/Dashboard.html",
            providers: [
                note_service_1.NoteService
            ],
            directives: [note_component_1.NoteComponent]
        }), 
        __metadata('design:paramtypes', [note_service_1.NoteService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=DashboardComponent.js.map