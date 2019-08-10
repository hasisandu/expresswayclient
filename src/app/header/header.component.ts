import {Component, OnInit} from '@angular/core';
import {DepartmentService} from "../service/department.service";
import {DepartmentDTO} from "../dto/department-dto";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  departments: DepartmentDTO[] = [];

  constructor(private service: DepartmentService) {
  }

  ngOnInit() {
    this.service.getAllDepartment().subscribe(department => {
      this.departments = department;
      console.log(this.departments);
    });

  }

}
