import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  loginForm = new FormGroup({
    username:new FormControl(""),
    password:new FormControl(""),
  })

  constructor(private storageService  : StorageService,private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(['home']);
    }
  }

  submit(username:string,password:string){
    this.authService.login(username,password).subscribe(
      res=>{
        this.storageService.saveUser(res);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log(this.roles)
        this.router.navigate(['login']);
       
      },
      error=>{
        console.log(error)
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  

}
