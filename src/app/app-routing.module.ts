import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListAdressComponent} from "./components/list-adress/list-adress.component";
import {EditAdressComponent} from "./components/edit-adress/edit-adress.component";
import {AddAdressComponent} from "./components/add-adress/add-adress.component";
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/partials/page-not-found/page-not-found.component";
import {AuthGuard} from "./guards/auth.guard";
import {AfterAuthGuard} from "./guards/after-auth.guard";

const routes: Routes = [
  { path: "", redirectTo : '/address', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: "address", children:[
      { path: "", component: ListAdressComponent },
      { path: "edit/:id", component: EditAdressComponent },
      { path: "add", component: AddAdressComponent },
    ]
  },
  { path: "login", component: LoginComponent, canActivate: [AfterAuthGuard] },
  { path: "**", component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
