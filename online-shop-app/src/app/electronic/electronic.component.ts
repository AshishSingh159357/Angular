import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {

  personFormGroup=new FormGroup({
    name:new FormControl(),
    age:new FormControl()

  });
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    
    console.log(this.personFormGroup)
    alert("Electronics !")
  }

}
