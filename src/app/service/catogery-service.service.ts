import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Catogery} from "../dto/catogery";

@Injectable({
  providedIn: 'root'
})
export class CatogeryServiceService {

  readonly baseUrl=environment.apiUrl+'/categories'

  constructor(private http:HttpClient) { }

  getAllCatogeries():Observable<Catogery[]>{
    console.log("ok")
    return this.http.get<Catogery[]>(this.baseUrl);
  }
}
