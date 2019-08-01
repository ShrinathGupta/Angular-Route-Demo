import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/Home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from '../app/components/Employee/employee.component';
import { EmployeeDetailsComponent } from '../app/components/EmployeeDetails/employee-details.component';
import { HelloComponent } from '../app/components/Hello/hello.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, EmployeeComponent,
    EmployeeDetailsComponent, HelloComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
