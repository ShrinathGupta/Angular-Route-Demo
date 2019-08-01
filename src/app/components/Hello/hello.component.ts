import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../../shared/service/shared.service';


@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  hello: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private sharedService: SharedService) {

  }
  ngOnInit(): void {
    this.hello = "Helloo, I'm grandchild... :)";
    this.sharedService.message.emit("Lowest nested level reached..!!");
  }
  onBack(): void {
    this.location.back();
    this.sharedService.message.emit("");

  }
}
