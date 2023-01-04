import { Component, OnInit } from '@angular/core';
import {AdressService} from "../../services/adress.service";
import {Adress} from "../../models/adress";

@Component({
  selector: 'app-list-adress',
  templateUrl: './list-adress.component.html',
  styleUrls: ['./list-adress.component.css']
})
export class ListAdressComponent implements OnInit {


  address: Adress[]=[];

  constructor(private adressService: AdressService) { }

  ngOnInit(): void {
    this.getAllAddresses();
  }

  getAllAddresses(){
    // @ts-ignore
    this.adressService.getAll().subscribe((res:Adress[]) => this.address = res);
  }

}
