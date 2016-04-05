import {Component} from 'angular2/core';
import {ShoppingListNewItemComponent} from "./shopping-list-new-item";

@Component({
    selector: 'shopping-list',
    template: `
<section>
    <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>    
</section>
<section>
    <h3>My List</h3>
    <div class="list">
        <ul>
            <li *ngFor="#listItem of listItems" (click)="onSelect(listItems)">
                {{listItem.name}} {{listItem.amount}}
            </li>
        </ul>
    </div>
</section>
<section *ngIf="selectedItem != null">
    <shopping-list-item [item]="selectedItem" (removed)="onRemove($event)"></shopping-list-item>
</section>
`,
    directives:[ShoppingListNewItemComponent]
})

export class ShoppingListComponent {
    listItems = new Array<{name: string, amount: number}>();
    selectedItem: {name: string, amount: number};

    onItemAdded (item: {name: string, amount: number}){
        this.listItems.push({name: item.name, amount: item.amount});
    }

    onSelect(item: {name: string, amount: number}){
        this.selectedItem = item;
    }

    onRemove(item: {name: string, amount: number}){
        this.listItems.splice(this.listItems.indexOf(item),1);
        this.selectedItem = null;
    }
}