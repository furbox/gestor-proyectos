import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Projects } from '../models/Projects';
import { GLOBAL } from './Global';

@Injectable()
export class ProjectsService{
	public url:string;
	public token:string;

	constructor(
			public _http: Http
		){
		this.url = GLOBAL.url;
	}

	getMyProjects(id_user){
		return this._http.get(this.url+'projects/listar/'+id_user, this.getOptions()).map(res => res.json());
	}

	private error(error:any){
		let msg = (error.message) ? error.message : "Error Desconocido";
		console.log(msg);
		return Observable.throw(msg);
	}

	private getDatos(data: Response){
		let datos = data.json();
		return datos || [];
	}

	private getUrl(modelo: String){
		return this.url + modelo;
	}

	private getOptions():RequestOptions{
		let headers = {};
    headers[GLOBAL.token_name] = localStorage.getItem(GLOBAL.token_name);
		let auth = new Headers(headers);
		let options = new RequestOptions({headers: auth});
		return options;
	}

}
