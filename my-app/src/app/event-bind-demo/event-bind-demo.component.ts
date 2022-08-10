import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind-demo',
  templateUrl: './event-bind-demo.component.html',
  styleUrls: ['./event-bind-demo.component.css']
})
export class EventBindDemoComponent implements OnInit {

  isHidden=false;
  message:string="";
  constructor() { }

  ngOnInit(): void {
  }

  toogle():void{
    this.isHidden=!this.isHidden;
    if(this.isHidden)
    {
    this.message="Bye"
    }
    else{
      this.message="Hi Again"
    }
  }

}
