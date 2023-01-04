import { Injectable } from '@angular/core';
import {TokenService} from "./token.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public loggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());

  authStatus = this.loggedIn.asObservable();

  constructor(private tokenService: TokenService) { }

  changeStatus(value: boolean){
    this.loggedIn.next(value);
  }
}
