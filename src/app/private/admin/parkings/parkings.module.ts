import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingsCreateOrUpdateComponent } from './parkings-create-or-update/parkings-create-or-update.component';
import { ParkingsListComponent } from './parkings-list/parkings-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromParkings from './parkings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ParkingsEffects } from './parkings.effects';



@NgModule({
  declarations: [
    ParkingsCreateOrUpdateComponent,
    ParkingsListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromParkings.parkingsFeatureKey, fromParkings.reducer),
    EffectsModule.forFeature([ParkingsEffects])
  ]
})
export class ParkingsModule { }
