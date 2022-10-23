import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'signup', 
    loadChildren:()=>import('./modules/signup/signup.module').then(m=>m.SignupModule)
  },
  { path: 'login',
    loadChildren:()=>import('./modules/login/login.module').then(m=>m.LoginModule)
  },
  { path: 'home', component:HomePageComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
