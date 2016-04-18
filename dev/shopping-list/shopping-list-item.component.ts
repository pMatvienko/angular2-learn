import {Component, Input, Output, EventEmitter} from "angular2/core";
import {ListItem} from "../list-item";


@Component({
    selector: 'shopping-list-item',
    template: `
<div class="input">
    <label for="item-name">Name</label>
    <input type="text" id="item-name" [(ngModel)]="item.name">
</div>
<div class="input">
    <label for="item-amt">Amount</label>
    <input type="text" id="item-amt" [(ngModel)]="item.amount">
</div>
<button class="red" (click)="onDelete()">Delete item</button>
    `
})

export class ShoppingListItemComponent {
    @Input('item') item = {name: '', amount: 0};
    @Output('removed') removed = new EventEmitter<ListItem>();

    onDelete() {
        this.removed.emit(this.item);
    }
}