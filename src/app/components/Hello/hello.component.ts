import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  hello: string;

  ngOnInit(): void {
    this.hello = "hey";
  }
}
