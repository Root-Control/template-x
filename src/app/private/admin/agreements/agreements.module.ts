import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementsCreateOrUpdateComponent } from './agreements-create-or-update/agreements-create-or-update.component';
import { AgreementsListComponent } from './agreements-list/agreements-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromAgreements from './agreements.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AgreementsEffects } from './agreements.effects';



@NgModule({
  declarations: [
    AgreementsCreateOrUpdateComponent,
    AgreementsListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAgreements.agreementsFeatureKey, fromAgreements.reducer),
    EffectsModule.forFeature([AgreementsEffects])
  ]
})
export class AgreementsModule { }
