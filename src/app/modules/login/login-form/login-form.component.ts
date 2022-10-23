import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
   
  }

  submit(){
    this.authService.login("mod","123456789").subscribe(
      res=>{
        console.log(res)
      },
      error=>{
        console.log(error)
      }
    );
  }

}
