import { Employee } from '../models/employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
	private employees: Employee[] = [];

	constructor() {
		this.employees.push({ id: 1, country: "United States", name: "Roy", salary: 3000 });
		this.employees.push({ id: 2, country: "Canada", name: "Albert", salary: 4000 });
		this.employees.push({ id: 3, country: "Australia", name: "Stephen ", salary: 6000 });
		this.employees.push({ id: 5, country: "Australia", name: "John ", salary: 6000 });
	}

	getEmpList(): any {
		return this.employees;
	}
	getEmpDetails(id): any {
		return this.employees.filter(function (a) {
			return a.id == id;
		});
	}
}