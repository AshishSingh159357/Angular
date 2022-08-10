import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-databind-demo',
  templateUrl: './two-way-databind-demo.component.html',
  styleUrls: ['./two-way-databind-demo.component.css']
})
export class TwoWayDatabindDemoComponent implements OnInit {

  message="Have a nice day!"
  constructor() { }

  ngOnInit(): void {
  }

}
