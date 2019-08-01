import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/Home/home.component';
import { EmployeeComponent } from '../app/components/Employee/employee.component';
import { EmployeeDetailsComponent } from '../app/components/EmployeeDetails/employee-details.component';
import { HelloComponent } from '../app/components/Hello/hello.component';


const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{
		path: 'employee', component: EmployeeComponent,
		children: [
			{
				path: 'details/:id',
				component: EmployeeDetailsComponent,
				children: [{
					path: 'hello',
					component: HelloComponent
				}
				]
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(
		appRoutes,
		{ enableTracing: true } // <-- debugging purposes only
	)],
	exports: [RouterModule]
})
export class AppRoutingModule { }