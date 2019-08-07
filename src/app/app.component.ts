import { Component } from '@angular/core';
import { SharedService } from './shared/service/shared.service';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader]   // Default route for all parent router outlet
})
export class AppComponent {
  title = 'angular-route-demo';
  message: string;
  constructor(private sharedService: SharedService) {
    this.sharedService.message.subscribe(
      (data: any) => {
        this.message = data;
      });
  }
  prepareRoute(outlet: RouterOutlet) {
    /*Here 'animation' is the key for data attribute of route object for custom route for specific path/route. 
      Refer: app-routing.module.js file
    */
    return outlet && outlet.activatedRouteData || outlet.activatedRouteData['animation']
  }
};
