import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-demo',
  templateUrl: './ngfor-demo.component.html',
  styleUrls: ['./ngfor-demo.component.css']
})
export class NgforDemoComponent implements OnInit {

  cities=['jamnagar','surat','ahmd','bhavnagar'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
