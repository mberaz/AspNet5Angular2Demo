var ListItem = (function () {
    function ListItem(id, name, isDone, itemType) {
        this.id = id;
        this.name = name;
        this.isDone = isDone;
        this.itemType = itemType;
    }
    ListItem.CreateEmptyListItem = function () {
        return new ListItem(0, "", false, new ListItemType(0, "Select a type"));
    };
    return ListItem;
}());
//# sourceMappingURL=listitem.js.map