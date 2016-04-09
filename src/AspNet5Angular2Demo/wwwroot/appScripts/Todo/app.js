/// <reference path="itemtype.ts" />
/// <reference path="listitem.ts" />
/// <reference path="common.ts" />
/// <reference path="config.ts" />
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
var browser_1 = require('angular2/platform/browser');
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var note_component_1 = require('./note.component');
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.title = "Michaels TODO app";
        this.navBarLInkText = "a random link";
        this.items = new Array();
        this.types = new Array();
        this.filerTypes = new Array();
        this.notes = new Array();
        this.loadNotes = function (data) {
            for (var i = 0; i < data.length; i++) {
                this.notes.push(new Note(data[i].Id, data[i].Text, data[i].Color));
            }
        };
        this.config = new Config();
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.addingNew = false;
        this.searchTerm = "";
        this.modal = new ModelOpener();
        //var notes: Note[] = [new Note(1,"5","red")];
        //this.note = notes[0] ;
        //this.http.get(this.config.apiBaseUrl + "Todo")
        //    .map(res=> res.json())
        //    .subscribe(
        //    data=> this.loadItems(data),
        //    err=> console.log(err),
        //    () => { }
        //    );
        this.http.get(this.config.apiBaseUrl + "Note")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.loadNotes(data); }, function (err) { return console.log(err); }, function () { });
        var urls = [this.config.apiBaseUrl + "Todo", this.config.apiBaseUrl + "ItemTypes"];
        Promise.all(urls.map(function (url) {
            return fetch(url).then(function (resp) { return resp.json(); });
        })).then(function (results) {
            _this.loadTypes(results[0], results[1]);
        });
    }
    AppComponent.prototype.loadTypes = function (itemList, typeList) {
        for (var i = 0; i < typeList.length; i++) {
            this.types.push(new ItemType(typeList[i].Id, typeList[i].Name));
        }
        this.selectedType = this.types[0];
        for (var i = 0; i < itemList.length; i++) {
            var type = this.getType(itemList[i].Type);
            this.items.push(new ListItem(itemList[i].Id, itemList[i].Name, itemList[i].IsDone, new ItemType(type.id, type.name)));
        }
        this.setDeafultItems();
        this.remainingItemsCount = this.items.length - this.doneItems.length;
    };
    AppComponent.prototype.search = function (term) {
        term = term.toLowerCase();
        if (!term) {
            this.setDeafultItems();
        }
        else {
            this.doneItems = this.items.where(function (x) { return x.isDone && x.name.toLowerCase().indexOf(term) > -1; });
            this.unDoneItems = this.items.where(function (x) { return !x.isDone && x.name.toLowerCase().indexOf(term) > -1; });
        }
    };
    AppComponent.prototype.toggleTypeFilter = function (type) {
        var index = this.filerTypes.indexOf(type);
        if (index === -1) {
            this.filerTypes.push(type);
        }
        else {
            this.filerTypes = this.filerTypes.slice(index, 0);
        }
        if (this.filerTypes.length > 0) {
            var typeIds = this.filerTypes.select(function (x) { return x.id; });
            this.doneItems = this.items.where(function (x) { return x.isDone && typeIds.indexOf(x.itemType.id) > -1; });
            this.unDoneItems = this.items.where(function (x) { return !x.isDone && typeIds.indexOf(x.itemType.id) > -1; });
        }
        else {
            this.setDeafultItems();
        }
    };
    AppComponent.prototype.setDeafultItems = function () {
        this.doneItems = this.items.where(function (x) { return x.isDone; });
        this.unDoneItems = this.items.where(function (x) { return !x.isDone; });
    };
    AppComponent.prototype.getType = function (id) {
        if (this.types) {
            return this.types.first(function (x) { return x.id == id; });
        }
    };
    AppComponent.prototype.onChange = function (item) {
        item.isDone = !item.isDone;
        this.setDeafultItems();
        this.remainingItemsCount = this.items.length - this.doneItems.length;
    };
    AppComponent.prototype.addItem = function (event) {
        this.addingNew = true;
        this.newItem = ListItem.CreateEmptyListItem();
    };
    AppComponent.prototype.newItemTypeChange = function (event) {
        if (event.currentTarget.value) {
            var type = this.types.first(function (x) { return x.id === parseInt(event.currentTarget.value); });
            if (type) {
                this.newItem.itemType = type;
            }
        }
    };
    AppComponent.prototype.SaveNewItem = function () {
        var _this = this;
        if (this.newItem.itemType.id === 0 || this.newItem.name.trim() === '') {
            alert("You must fill all of the data!");
            return;
        }
        this.addingNew = false;
        var data = JSON.stringify(this.newItem);
        this.http.post(this.config.apiBaseUrl + "Todo", data, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.saveCallback(data); }, function (err) { return console.log(err); }, function () { });
    };
    AppComponent.prototype.saveCallback = function (data) {
        this.unDoneItems.push(new ListItem(data.Id, this.newItem.name, false, this.getType(data.Type)));
    };
    AppComponent.prototype.cancel = function () {
        this.addingNew = false;
    };
    AppComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    AppComponent.prototype.setClass = function (item) {
        return item.isDone ? "label-success" : "label-info";
    };
    AppComponent.prototype.changeSelectedItemType = function (event) {
        if (!event.currentTarget.value) {
            return;
        }
        var newType = this.getType(parseInt(event.currentTarget.value));
        this.selectedItem.itemType = newType;
    };
    AppComponent.prototype.getSelectedClass = function (item) {
        return { "selected": item === this.selectedItem };
    };
    AppComponent.prototype.updateName = function (item) {
        var _this = this;
        var data = JSON.stringify(this.selectedItem);
        this.http.put(this.config.apiBaseUrl + "Todo", data, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.showAlert(data); }, function (err) { return console.log(err); }, function () { });
    };
    AppComponent.prototype.showAlert = function (data) {
        alert(data);
    };
    AppComponent.prototype.openModal = function () {
        //function (res) { alert(res ? "ok" : "cancel");
        this.modal.prompt("header", "message to me", null, function (res) { alert(res); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "/Todo/ListApp.html",
            directives: [note_component_1.NoteComponent],
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
browser_1.bootstrap(AppComponent, [http_1.HTTP_BINDINGS]);
//# sourceMappingURL=app.js.map