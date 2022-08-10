import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createSigningForm();
  }

  createSigningForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      rePassword: ['', [Validators.required]]

    },{validators:passwordMissingValidator})
  }

  get signup() {
    return this.signupForm?.controls;
  }
  validate() {
    alert("Sign up form submitted")
  }


  

}
function passwordMissingValidator(controls: AbstractControl): { [key: string]: boolean } | null 
  {
    const userPwd = controls.get('password');
    const userRePwd = controls.get('rePassword');
      if (userPwd?.value != userRePwd?.value) {
        return { 'passwordMismatch': true } //  validate error object returning
      }

    return null;

  }