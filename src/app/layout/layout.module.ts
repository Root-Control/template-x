import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { PublicModule } from './public/public.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminModule,
    UserModule,
    PublicModule
  ]
})
export class LayoutModule { }
