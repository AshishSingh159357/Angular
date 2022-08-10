import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-greeting',
  templateUrl: './my-greeting.component.html',
// template:`<p>welcome to my world</p>`,
  styleUrls: ['./my-greeting.component.css']
})

export class MyGreetingComponent implements OnInit {

  message:string='';
  
  constructor() {
    console.log("Constructor are called");
   }

  ngOnInit(): void {
    this.message="Hello world"
    console.log("ngOnInit");
  }

}
