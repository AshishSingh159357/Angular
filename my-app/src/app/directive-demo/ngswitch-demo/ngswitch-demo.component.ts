import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';

@Component({
  selector: 'app-ngswitch-demo',
  templateUrl: './ngswitch-demo.component.html',
  styleUrls: ['./ngswitch-demo.component.css']
})
export class NgswitchDemoComponent implements OnInit {

  candidate:Candidate=new Candidate()

  constructor() { }

  ngOnInit(): void {
  }

  save(formData:any):void{
    this.candidate.name=formData.nm.value;
    this.candidate.age=formData.age.value;
  }

}
