import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanksCreateOrUpdateComponent } from './banks-create-or-update/banks-create-or-update.component';
import { BanksListComponent } from './banks-list/banks-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromBanks from './banks.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BanksEffects } from './banks.effects';



@NgModule({
  declarations: [
    BanksCreateOrUpdateComponent,
    BanksListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBanks.banksFeatureKey, fromBanks.reducer),
    EffectsModule.forFeature([BanksEffects])
  ]
})
export class BanksModule { }
