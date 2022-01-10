import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { PublicSidebarComponent } from './public-sidebar/public-sidebar.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PublicHeaderComponent,
    PublicFooterComponent,
    PublicSidebarComponent,
    PublicLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PublicModule { }
