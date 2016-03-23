import {Component, OnInit} from 'angular2/core';
import {TestComponent} from "./test.component";

@Component({
    selector: 'my',
    template:`
        Hello, I am <span [class.is-awesome]="awesomeInput.value == 'yes'">{{name}}</span>.

        <span [style.color]="awesomeInput.value == 'yes' ? 'red' : ''">Is it awesome?</span>
        <br />
        <input type="text" #awesomeInput (keyup)="0">
        <br /><br />
        <button [disabled]="awesomeInput.value != 'yes'">Disabled Button</button>
        <br /><br />
        <br /><br />
        <test></test>
    `,
    styleUrls:['src/css/my.css'],
    directives:[TestComponent]
})

export class MyComponent implements OnInit{
    name: string;

    ngOnInit():any{
        this.name = 'qwerty';
        return null;
    }
}
