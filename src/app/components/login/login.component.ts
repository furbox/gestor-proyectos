import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccessService} from '../../services/access.service';
import {User} from '../../models/User';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [AccessService]
})

export class LoginComponent implements OnInit {
    maintitle = "Inicio de Sesion";
    model: User = new User();
    error: string;
    is_login: boolean = false;
    data_user: any;

    constructor(
        private _router: Router,
        private _auth: AccessService
    ) {}

    ngOnInit() {
        this._auth.logout();
    }

    login() {
        this.is_login = true;
        this._auth.login(this.model).subscribe(
            result => {
                if (result === true) {
                    this._router.navigate(['/home']);
                    this.is_login = true;
                } else {
                    console.log(result);
                    this.error = 'Datos Invalidos';
                    this.is_login = false;
                }
            },
            error => {
                this.error = 'Datos Invalidos';
                this.is_login = false;
            });
    }

}
