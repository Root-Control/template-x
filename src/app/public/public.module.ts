import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { ErrorCodesModule } from './error-codes/error-codes.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationModule,
    ErrorCodesModule
  ]
})
export class PublicModule { }
