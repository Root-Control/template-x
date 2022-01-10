import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from 'src/app/layout/admin/admin-layout/admin-layout.component';
import { CondominiumsCreateOrUpdateComponent } from './condominiums-create-or-update/condominiums-create-or-update.component';
import { CondominiumsListComponent } from './condominiums-list/condominiums-list.component';

export const condominiumsRoutes = [{
    path: 'condominiums',
    component: AdminLayoutComponent,
    children: [
        { path: '', component: CondominiumsListComponent },
        { path: 'create-update', component: CondominiumsCreateOrUpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(condominiumsRoutes)],
  exports: [RouterModule]
})
export class CondominiumRoutingModule { }