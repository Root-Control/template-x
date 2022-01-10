import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondominiumsCreateOrUpdateComponent } from './condominiums-create-or-update/condominiums-create-or-update.component';
import { CondominiumsListComponent } from './condominiums-list/condominiums-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromCondominiums from './condominiums.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CondominiumsEffects } from './condominiums.effects';
import { CondominiumRoutingModule } from './condominiums.routing.module';

@NgModule({
  declarations: [
    CondominiumsCreateOrUpdateComponent,
    CondominiumsListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCondominiums.condominiumsFeatureKey, fromCondominiums.reducer),
    CondominiumRoutingModule,
    EffectsModule.forFeature([CondominiumsEffects])
  ]
})
export class CondominiumsModule { }
