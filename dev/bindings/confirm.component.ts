import {Component, EventEmitter, Output, Input} from 'angular2/core';

@Component({
    selector: 'my-confirm',
    template: `
        <h1>Is this details correct</h1>
        <p>
            Your name is: <span class="highlight">{{myself.name}}</span> and 
            you are <span class="highlight">{{myself.age}}</span> years old.
            Please confirm your data.
        </p>
        <div>
            <label>
            Name: <input type="text" [(ngModel)]="myself.name" (keyup)="onMyKeyup()">
            </label><br />
            <label>
                Age: <input type="text" [(ngModel)]="myself.age" (keyup)="onMyKeyup()">
            </label>
            <br />
            <br />
            <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
            <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
            <br />
            <br />
            <button [disabled]="!isValid" (click)="onConfirm()">Submit</button>
        </div>
    `
})

export class ConfirmComponent{
    @Input('myself') myself = {name:'',age:''}

    isFilled = false;
    isValid = false;

    @Output('confirmed') confirmed = new EventEmitter<{name:string,age:string}>();


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

    onConfirm(){
        this.confirmed.emit(this.myself);
    }
}