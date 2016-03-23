import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'my-puzzle',
    template: `
        <section class="setup">
            <h2>Game Setup</h2><br /><br />
            Enter your name:
            <input type="text" #name (keyup)="0">
        </section>
        <section 
            [ngClass]="{
                puzzle: true,
                solved: switch1.value == switch1Num && switch2.value == switch2Num && switch3.value == switch3Num && switch4.value == switch4Num
            }"
            [ngStyle]="{display: name.value==''?'none':'block'}">
            <h2>The Game | {{switch1.value == switch1Num && switch2.value == switch2Num && switch3.value == switch3Num && switch4.value == switch4Num ? 'SOLVED' : 'NOT SOLVED'}}</h2><br />
            <p>Ok, welcome <span class="name">{{name.value}}</span></p>
            <br />
            Switch 1:
            <input type="text" #switch1 (keyup)="0"><br />
            Switch 2:
            <input type="text" #switch2 (keyup)="0"><br />
            Switch 3:
            <input type="text" #switch3 (keyup)="0"><br />
            Switch 4:
            <input type="text" #switch4 (keyup)="0"><br />
        </section>
        
        <h2 [hidden]="switch1.value != switch1Num || switch2.value != switch2Num || switch3.value != switch3Num || switch4.value != switch4Num">You did it!</h2>
    `
})
export class PuzzleComponent implements OnInit{
    switch1Num: number;
    switch2Num: number;
    switch3Num: number;
    switch4Num: number;

    ngOnInit():any {
        this.switch1Num = Math.round(Math.random());
        this.switch2Num = Math.round(Math.random());
        this.switch3Num = Math.round(Math.random());
        this.switch4Num = Math.round(Math.random());

        console.info(
            this.switch1Num,
            this.switch2Num,
            this.switch3Num,
            this.switch4Num
        );
    }


}
