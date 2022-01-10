import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordEmailComponent } from './reset-password-email/reset-password-email.component';
import { AuthenticationRoutingModule } from './authentication.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './authentication.effects';

@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent,
    ResetPasswordEmailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    EffectsModule.forFeature([AuthenticationEffects])
  ]
})
export class AuthenticationModule { }
