import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { AccessService } from '../../services/access.service';
import { Projects } from '../../models/Projects';
import { GLOBAL } from '../../services/Global';
import { User } from '../../models/User';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  providers: [ProjectsService,AccessService]
})

export class ProjectsComponent{
  maintitle = "Lista de Proyectos";
  user_info: any;

	displayProjects(project: Projects){
		console.log(project);
	}

	constructor(
      private _auth:AccessService,
			private _servicio: ProjectsService,
			private _router: Router
		){
      this.getMyProjects();
    }

    getMyProjects(){
      this.user_info = this._auth.getUserData();
      console.log(this.user_info);
      this._servicio.getMyProjects(this.user_info.user_id).subscribe(
        result => {
          console.log(result);
        },error => {
          console.log(<any>error);
        });
    }



}
