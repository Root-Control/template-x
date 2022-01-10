import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsCreateOrUpdateComponent } from './groups-create-or-update/groups-create-or-update.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromGroups from './groups.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GroupsEffects } from './groups.effects';



@NgModule({
  declarations: [
    GroupsCreateOrUpdateComponent,
    GroupsListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromGroups.groupsFeatureKey, fromGroups.reducer),
    EffectsModule.forFeature([GroupsEffects])
  ]
})
export class GroupsModule { }
