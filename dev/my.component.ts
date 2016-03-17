import {Component} from 'angular2/core';

@Component({
    selector: 'my',
    template:`
        Hello, I am <span [class.is-awesome]="awesomeInput.value == 'yes'">{{name}}</span>.

        Is it awesome?
        <br />
        <input type="text" #awesomeInput (keyup)="0">
    `,
    styleUrls:['src/css/my.css']
})

export class MyComponent{
    name = 'йцукен';
}
