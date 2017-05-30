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
    is_login:boolean = false;
    constructor(private _auth: AccessService){}
    ngOnInit(){
      this.is_login = this._auth.hasToken();
      console.log(this.is_login);
    }
}
