import {Component, EventEmitter, Output, Input} from 'angular2/core';

@Component({
    selector: 'my-input',
    template: `
        <h1>Enter Your details, pls</h1>
        <label>
            Name: <input type="text" [(ngModel)]="myself.name" (keyup)="onMyKeyup()">
        </label><br />
        <label>
            Age: <input type="text" [(ngModel)]="myself.age" (keyup)="onMyKeyup()">
        </label>
        <br />
        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
        <br />
        <button [disabled]="!isValid" (click)="onSubmit()">Submit</button>
`
})

export class InputComponent{
    @Input('myself') myself = {name:'',age:''}
    isFilled = false;
    isValid = false;
    @Output('submitted') submitted = new EventEmitter();

    onMyKeyup() {
        if(this.myself.name != '' && this.myself.age != ''){
            this.isFilled = true;
        } else{
            this.isFilled = false;
        }

        if(this.myself.name != '' && /^\d+$/.test(this.myself.age)){
            this.isValid = true;
        } else{
            this.isValid = false;
        }
    }

    onSubmit(){
        this.submitted.emit(this.myself);
    }
}