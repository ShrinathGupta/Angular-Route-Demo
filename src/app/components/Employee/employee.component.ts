import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../service/employee.service";

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})

export class EmployeeComponent implements OnInit {
  employeeArray: [];
  constructor(private apiSerivce: EmployeeService) {

  }
  getEmployees(): void {
    this.employeeArray = this.apiSerivce.getEmpList();
  }

  ngOnInit(): void {
    this.getEmployees();
  }
}
