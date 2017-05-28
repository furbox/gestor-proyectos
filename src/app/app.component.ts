import {Component} from '@angular/core';
import {AccessService} from './services/access.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[AccessService]
})
export class AppComponent {
    title = 'Go Project';
    constructor(private _auth: AccessService){}
}
