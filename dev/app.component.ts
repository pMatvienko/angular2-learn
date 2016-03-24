import {Component} from 'angular2/core';
import {PbComponent} from "./pb.component";
import {InputComponent} from "./bindings/input.component";
import {ConfirmComponent} from "./bindings/confirm.component";

@Component({
    selector: 'my-app',
    template: `
<section class="task">
    <div class="container">
        <my-input (submitted)="onSubmit($event)" [myself]="confirmedMyself"></my-input>
    </div>
    <div class="container">
        <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
    </div>
</section>

<section class="tests">
<br />
<br />
<br />
        <h2>The Parent Component</h2>
        <br />
        Enter Your Name <br />
        <input type="text" [(ngModel)]="name">
        <br />
        <section class="child">
            <my-pb [myName]="name" [myAge]="31" 
                (hobbiesChanged)="hobbies = $event"></my-pb>
            <p>Some text From child component {{hobbies}}</p>
        </section>
</section> 
`,
    directives:[PbComponent, InputComponent, ConfirmComponent]
})
export class AppComponent {
    name = '';
    hobbies = '';

    myself = {
        name:'',
        age:''
    }

    confirmedMyself = {
        name:'',
        age:''
    }

    onSubmit(myself: {name:string, age:string}){
        this.myself = {name: myself.name, age: myself.age};
    }

    onConfirm(myself: {name:string, age:string}){
        this.confirmedMyself = {name: myself.name, age: myself.age};
    }
}
