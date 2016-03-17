import {Component} from 'angular2/core';
import {MyComponent} from './my.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <h2>And now goes My Component</h2>
        <my></my>
    `,
    directives:[MyComponent]
})
export class AppComponent {

}
