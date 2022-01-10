import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserHeaderComponent,
    UserFooterComponent,
    UserSidebarComponent,
    UserLayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class UserModule { }
