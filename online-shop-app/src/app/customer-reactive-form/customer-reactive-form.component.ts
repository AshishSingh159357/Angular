import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-reactive-form',
  templateUrl: './customer-reactive-form.component.html',
  styleUrls: ['./customer-reactive-form.component.css']
})
export class CustomerReactiveFormComponent implements OnInit {

  customerProfile:FormGroup =new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.customerProfile=new FormGroup({
      fullName:new FormControl(),
      age:new FormControl(),
      gender:new FormControl(),

      address:new FormGroup({
        flatNo:new FormControl(),
        streetName:new FormControl(),
        locality:new FormControl(),
        city:new FormControl(),
        pinCode:new FormControl()
    })

    });
  }

  save(){
    alert("Form submitted")
  }

}
