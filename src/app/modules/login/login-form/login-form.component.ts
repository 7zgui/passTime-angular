import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    username:new FormControl(""),
    password:new FormControl(""),
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.loginForm.controls)
  }

}
