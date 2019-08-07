import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/Home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from '../app/components/Employee/employee.component';
import { EmployeeDetailsComponent } from '../app/components/EmployeeDetails/employee-details.component';
import { HelloComponent } from '../app/components/Hello/hello.component';
import { PageNotFoundComponent } from '../app/components/PageNotFound/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from './shared/service/shared.service';
import { AccountComponent } from '../app/components/Account/account.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, EmployeeComponent,
    EmployeeDetailsComponent, HelloComponent, PageNotFoundComponent, AccountComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
