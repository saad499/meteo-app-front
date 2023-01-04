import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${environment.apiUrl}/addresses`)
  }
}
