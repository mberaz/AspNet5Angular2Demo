/// <reference path="listitem.ts" />
/// <reference path="listitemtype.ts" />
/// <reference path="config.ts" />
/// <reference path="common.ts" />
/// <reference path="note.component.ts" />
/// <reference path="modelopener.ts" />
/// <reference path="note.ts" />


import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: "/Todo/TodoApp.html",
})
export class TodoApp {
    title = 'MIchaels new TODO app';

    selectedItem: ListItem;
    public newItem: ListItem;
    //public http: any;
    public config: Config;
    public addingNew: boolean;
    public headers: Headers;
    public items = new Array<ListItem>();
    public types = new Array<ListItemType>();
    public filerTypes = new Array<ListItemType>();
    public selectedType: ListItemType;
    public modal: ModelOpener;
    public note: Note;
    public notes = new Array<Note>();
    public searchTerm: string;
    public remainingItemsCount: Number;
    public doneItems: Array<ListItem>;
    public unDoneItems: Array<ListItem>;

    public todoItems = TodoList;

    constructor() {
        this.config = new Config();
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.addingNew = false;
        this.searchTerm = "";
        this.modal = new ModelOpener();

        this.setDeafultItems();
    }

    setDeafultItems() {
        this.doneItems = this.todoItems.where((x) => { return x.isDone; });
        this.unDoneItems = this.todoItems.where((x) => { return !x.isDone; });
        this.remainingItemsCount = this.unDoneItems.length;
    }

    onSelect(item: ListItem) {
        this.selectedItem = item;
    }

    onChange(item: ListItem) {
        item.isDone = !item.isDone;
        this.setDeafultItems()
    }

    setClass(item: ListItem) {
        return item.isDone ? "label-success" : "label-info";
    }
}


var TodoList: ListItem[] = [

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