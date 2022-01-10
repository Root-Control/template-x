import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicLayoutComponent } from 'src/app/layout/public/public-layout/public-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordEmailComponent } from './reset-password-email/reset-password-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const authenticationRoutes = [{
    path: 'auth',
    children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { 
          path: 'reset', 
          children: [{
            path: '',
            component: ResetPasswordEmailComponent
          }, {
            path: ':token',
            component: ResetPasswordComponent
          }]
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authenticationRoutes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }