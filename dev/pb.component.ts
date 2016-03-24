import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'my-pb',
    inputs:['name:myName'],
    template: `
        <h2>Child Component</h2>
        <p>Hello {{name}}, {{age}}</p>
        <h4>Some text to reflect in parent.</h4>
        <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
    `
})

export class PbComponent{
    name = '';
    @Input('myAge') age = 20;
    @Output('hobbiesChanged') hobbiesChanged = new EventEmitter<string>();

    onHobbiesChanged(hobbies: string){
        this.hobbiesChanged.emit(hobbies);
    }
}