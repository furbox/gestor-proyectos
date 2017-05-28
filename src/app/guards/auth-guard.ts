import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GLOBAL } from '../services/Global';

@Injectable()
export class AuthGuard implements CanActivate{

	constructor(private _router: Router){}

	canActivate(){
		if(localStorage.getItem(GLOBAL.token_name)){
			return true;
		}
		this._router.navigate(['/login']);
		return false;
	}
}