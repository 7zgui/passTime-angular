import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm = new FormGroup({
    email:new FormControl(""),
    username:new FormControl(""),
    password:new FormControl(""),
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.signupForm.controls)
  }

}
