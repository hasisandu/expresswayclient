import {Component, OnInit} from '@angular/core';
import {DepartmentService} from "../service/department.service";
import {DepartmentDTO} from "../dto/department-dto";

@Component({
  selector: 'app-todaydeals',
  templateUrl: './todaydeals.component.html',
  styleUrls: ['./todaydeals.component.css']
})
export class TodaydealsComponent implements OnInit {

  departments: DepartmentDTO[] = [];

  constructor(private http: DepartmentService) {
  }

  ngOnInit() {
    this.http.getAllDepartment().subscribe(dep => {
      this.departments = dep;
    });
  }

}
