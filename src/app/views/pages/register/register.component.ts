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
    role:new FormControl("")
  })

  constructor(private authService : AuthService, private router: Router) { }

  submit(username:any,email:any,role:any,password:any){
    this.authService.register(username,email,role,password).subscribe(
      res=>{
        
        console.log(res)
        //this.router.navigate(['login']);
        
      },
      error=>{
        console.log(error)
        
      }
      );
  }

}
