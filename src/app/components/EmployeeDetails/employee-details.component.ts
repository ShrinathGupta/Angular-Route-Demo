import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from "../../service/employee.service";

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  name: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiSerivce: EmployeeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
      const data = this.id != undefined ? this.apiSerivce.getEmpDetails(this.id) : null;
      this.name = data.length > 0 ? data[0].name : null;
    });
    console.log("==> ", this.router);


  }
  onClickMe() {
    // this.router.navigate(['/about']);
    this.router.navigate(['employee/details/' + this.id + '/hello']);

  }
}
