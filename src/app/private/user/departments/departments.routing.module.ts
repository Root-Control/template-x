import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLayoutComponent } from 'src/app/layout/user/user-layout/user-layout.component';
import { DepartmentsViewComponent } from './departments-view/departments-view.component';

export const departmentsRoutes = [{
    path: 'my-department',
    component: UserLayoutComponent,
    children: [
        { path: '', component: DepartmentsViewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(departmentsRoutes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }