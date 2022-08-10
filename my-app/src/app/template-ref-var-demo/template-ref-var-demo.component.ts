import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-var-demo',
  templateUrl: './template-ref-var-demo.component.html',
  styleUrls: ['./template-ref-var-demo.component.css']
})
export class TemplateRefVarDemoComponent implements OnInit {

  name:string|undefined;

  constructor() { }

  ngOnInit(): void {

  }

  save(name:any){
    this.name=name
  }

}
