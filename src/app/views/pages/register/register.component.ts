import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  signupForm = new FormGroup({
    email:new FormControl(""),
    username:new FormControl(""),
    password:new FormControl(""),
  })

  constructor(private authService : AuthService, private router: Router) { }

  submit(){
    console.log(this.signupForm.controls)
  }

}
