import { Component } from '@angular/core';
import { SharedService } from './shared/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-route-demo';
  message: string;
  constructor(private sharedService: SharedService) {
    this.sharedService.message.subscribe(
      (data: any) => {
        console.log(data);
        this.message = data;
      });
  }
}
