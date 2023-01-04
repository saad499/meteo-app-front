import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../services/account.service";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentUser: null | undefined;

  constructor(
    public router: Router,
    private accountService: AccountService,
    private  tokenService: TokenService) { }

  ngOnInit(): void {
    this.accountService.authStatus.subscribe(res => {
        this.currentUser = this.tokenService.getInfo();
    })
  }

  logout(){
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl("/login");
  }

}
