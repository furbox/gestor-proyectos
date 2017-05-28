import { Component } from '@angular/core';
import { AccessService } from '../../services/access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [AccessService]
})
export class HomeComponent {
  maintitle = "Go Project Management";
  constructor(private _auth: AccessService){}
  
  ngOnInit(){
  	
  }
}
