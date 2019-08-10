import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DepartmentDTO} from "../dto/department-dto";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly baseurl = environment.apiUrl + "/departments";

  constructor(private http: HttpClient) {
  }

  public getAllDepartment(): Observable<DepartmentDTO[]> {
    return this.http.get<DepartmentDTO[]>(this.baseurl);
  }
}
