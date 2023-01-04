import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import * as Console from "console";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null,[ Validators.required, Validators.minLength(8), Validators.maxLength(8)])
  })

  constructor(
    private authService:AuthService,
    private tokenService: TokenService,
    private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe(res => this.handleResponse(res))
  }

  handleResponse(res:any){
    this.tokenService.handle(res);
    this.accountService.changeStatus(true);
    this.router.navigateByUrl("/addres");
  }

}
