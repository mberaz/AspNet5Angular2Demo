/// <reference path="listitem.ts" />
/// <reference path="listitemtype.ts" />
/// <reference path="config.ts" />
/// <reference path="common.ts" />
/// <reference path="note.component.ts" />
/// <reference path="modelopener.ts" />
/// <reference path="note.ts" />
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
var core_1 = require('angular2/core');
var TodoApp = (function () {
    function TodoApp() {
        this.title = 'MIchaels new TODO app';
        this.items = new Array();
        this.types = new Array();
        this.filerTypes = new Array();
        this.notes = new Array();
        this.todoItems = TodoList;
        this.config = new Config();
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.addingNew = false;
        this.searchTerm = "";
        this.modal = new ModelOpener();
        this.setDeafultItems();
    }
    TodoApp.prototype.setDeafultItems = function () {
        this.doneItems = this.todoItems.where(function (x) { return x.isDone; });
        this.unDoneItems = this.todoItems.where(function (x) { return !x.isDone; });
        this.remainingItemsCount = this.unDoneItems.length;
    };
    TodoApp.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    TodoApp.prototype.onChange = function (item) {
        item.isDone = !item.isDone;
        this.setDeafultItems();
    };
    TodoApp.prototype.setClass = function (item) {
        return item.isDone ? "label-success" : "label-info";
    };
    TodoApp = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "/Todo/TodoApp.html",
        }), 
        __metadata('design:paramtypes', [])
    ], TodoApp);
    return TodoApp;
}());
exports.TodoApp = TodoApp;
var TodoList = [
    new ListItem(1, "Buy milk", false, new ListItemType(4, "Misc")),
    new ListItem(2, "Buy shoes", true, new ListItemType(4, "Misc")),
    new ListItem(3, "Throw away trash", false, new ListItemType(4, "Misc")),
    new ListItem(4, "Play fallout 4", false, new ListItemType(4, "Misc")),
    new ListItem(5, "play fm", true, new ListItemType(4, "Misc")),
    new ListItem(6, "chill", false, new ListItemType(4, "Misc")),
    new ListItem(1, "Buy T shirt", false, new ListItemType(4, "Misc")),
    new ListItem(2, "Clean house", true, new ListItemType(4, "Misc")),
    new ListItem(3, "Throw away old shoes", false, new ListItemType(4, "Misc")),
    new ListItem(4, "Play more fallout 4", false, new ListItemType(4, "Misc")),
    new ListItem(5, "See star wars ", true, new ListItemType(4, "Misc")),
    new ListItem(6, "Spoil star wars ", false, new ListItemType(4, "Misc")),
];
//# sourceMappingURL=App.Todo.js.map