import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { AuthGuard } from './guards/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
