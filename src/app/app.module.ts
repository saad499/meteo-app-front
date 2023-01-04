import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAdressComponent } from './components/add-adress/add-adress.component';
import { EditAdressComponent } from './components/edit-adress/edit-adress.component';
import { ListAdressComponent } from './components/list-adress/list-adress.component';
import { NavBarComponent } from './components/partials/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from "@angular/forms";

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./services/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    AddAdressComponent,
    EditAdressComponent,
    ListAdressComponent,
    NavBarComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
