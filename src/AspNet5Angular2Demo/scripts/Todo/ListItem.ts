class ListItem {
    id: number;
    name: string;
    isDone: boolean;
   // type: number;
    itemType: ListItemType;
    constructor(id: number, name: string, isDone: boolean, itemType: ListItemType) {
        this.id = id;
        this.name = name;
        this.isDone = isDone;
        this.itemType = itemType;
    }

    static CreateEmptyListItem() {
        return new ListItem(0, "", false, new ListItemType(0,"Select a type"));
    }

}



