import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsViewComponent } from './departments-view/departments-view.component';
import { StoreModule } from '@ngrx/store';
import * as fromDepartments from './departments.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentsEffects } from './departments.effects';
import { DepartmentsRoutingModule } from './departments.routing.module';

@NgModule({
  declarations: [
    DepartmentsViewComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    StoreModule.forFeature(fromDepartments.departmentsFeatureKey, fromDepartments.reducer),
    EffectsModule.forFeature([DepartmentsEffects])
  ]
})
export class DepartmentsModule { }
