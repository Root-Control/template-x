import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminSidebarGroupComponent } from './admin-sidebar-group/admin-sidebar-group.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    AdminLayoutComponent,
    AdminSidebarGroupComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class AdminModule { }
