import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-demo',
  templateUrl: './ngif-demo.component.html',
  styleUrls: ['./ngif-demo.component.css']
})
export class NgifDemoComponent implements OnInit {

  names:string|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  save():void{
    this.names="Ashish Singh";
  }
  
}
