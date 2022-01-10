import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsCreateOrUpdateComponent } from './departments-create-or-update/departments-create-or-update.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromDepartments from './departments.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentsEffects } from './departments.effects';



@NgModule({
  declarations: [
    DepartmentsCreateOrUpdateComponent,
    DepartmentsListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDepartments.departmentsFeatureKey, fromDepartments.reducer),
    EffectsModule.forFeature([DepartmentsEffects])
  ]
})
export class DepartmentsModule { }
