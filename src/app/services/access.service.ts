import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';
import { GLOBAL } from './Global';


@Injectable()
export class AccessService{
	public url:string;
	public token:string;

	constructor(
			public _http: Http
		){
		this.url = GLOBAL.url;
		var currentUser = localStorage.getItem(GLOBAL.token_name);
        this.token = currentUser;;
	}

	logout(){
		localStorage.removeItem(GLOBAL.token_name);
	}

	login(user: User): Observable<boolean>{
		let body = 'user_email='+user.user_email+'&user_pass='+user.user_pass;

		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		let options = new RequestOptions({'headers': headers});

		return this._http.post(this.url+'auth/autenticar',body, options)
		.map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().result;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(GLOBAL.token_name, JSON.stringify(this.token));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
	}

	private error(error: any){
		let msg = (error.message) ? error.message : "Error Desconocido";
		console.log(msg);
		return Observable.throw(msg);
	}

	private getDatos(data: Response){

		let datos = data.json();
		if(datos && datos.result){
			localStorage.setItem(GLOBAL.token_name,datos.result);
			return true;
		}else{
			return false;
		}
	}

	private getUrl(modelo: String){
		return this.url + modelo;
	}

	getUserData(){
		try {
            var token = localStorage[GLOBAL.token_name];
            if (token === ''){
                return;
			}
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');

            return JSON.parse(window.atob(base64)).data;
        } catch (err) {
        	console.log(<any>err);
            //$location.path('/');
        }
	}

	hasToken(){
		let token = localStorage[GLOBAL.token_name];
		if (token) {
			return true;
		}
		return false;
	}

	redirectIfNotExists(){
		if (!this.hasToken()) {
            //$location.path('/');
        }
	}
}
