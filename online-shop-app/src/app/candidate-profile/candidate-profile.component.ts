import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {

  candidateName:string|undefined;
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    alert("Done")
  }

}
