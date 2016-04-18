import {Component, EventEmitter, Output} from 'angular2/core';
import {ListItem} from "../list-item";

@Component({
    selector: 'shopping-list-new-item',
    template:`
<div class="input">
    <label for="item-name">Name</label>
    <input type="text" id="item-name" [(ngModel)]="item.name">
</div>
<div class="input">
    <label for="item-amt">Amount</label>
    <input type="text" id="item-amt" [(ngModel)]="item.amount">
</div>
<button (click)="onClick()">Add item</button>
`
})

export class ShoppingListNewItemComponent{
    item = {name: '', amount: 0};
    @Output('itemAdded') itemAdded = new EventEmitter<ListItem>();

    onClick(){
        this.itemAdded.emit(this.item);
    }
}