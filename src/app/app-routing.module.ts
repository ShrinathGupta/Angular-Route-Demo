import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/Home/home.component';
import { EmployeeComponent } from '../app/components/Employee/employee.component';
import { EmployeeDetailsComponent } from '../app/components/EmployeeDetails/employee-details.component';
import { HelloComponent } from '../app/components/Hello/hello.component';
import { PageNotFoundComponent } from '../app/components/PageNotFound/page-not-found.component';
import { AccountComponent } from '../app/components/Account/account.component';
import { AuthGuard } from '../app/shared/service/auth.service';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	//You can define your custom animation in route-animation file,for specific route. See below for reference
	// Example: { path: 'home', component: HomeComponent, data : { animation: 'customAnimation' } } 
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
	},
	{ path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
	{ path: '', component: HomeComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(
		appRoutes,
		{ enableTracing: true } // <-- debugging purposes only
	)],
	exports: [RouterModule]
})
export class AppRoutingModule { }