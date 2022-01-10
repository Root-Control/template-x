import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TowersCreateOrUpdateComponent } from './towers-create-or-update/towers-create-or-update.component';
import { TowersListComponent } from './towers-list/towers-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromTowers from './towers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TowersEffects } from './towers.effects';



@NgModule({
  declarations: [
    TowersCreateOrUpdateComponent,
    TowersListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTowers.towersFeatureKey, fromTowers.reducer),
    EffectsModule.forFeature([TowersEffects])
  ]
})
export class TowersModule { }
