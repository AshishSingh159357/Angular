import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidate-profile-valid-reactive',
  templateUrl: './candidate-profile-valid-reactive.component.html',
  styleUrls: ['./candidate-profile-valid-reactive.component.css']
})
export class CandidateProfileValidReactiveComponent implements OnInit {

  candidateForm : FormGroup=new FormGroup({})
  // injecting FormBuilder service into component
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createCandidateForm();
  }

  createCandidateForm(){
    this.candidateForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      age:[0,[Validators.required]]
    })
  }

  get candidate(){
    return this.candidateForm.controls;
  }

  save(){
    alert("form is submitted")
  }
}
