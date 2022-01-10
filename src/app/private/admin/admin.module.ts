import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondominiumsModule } from './condominiums/condominiums.module';
import { GroupsModule } from './groups/groups.module';
import { TowersModule } from './towers/towers.module';
import { DepartmentsModule } from './departments/departments.module';
import { AgreementsModule } from './agreements/agreements.module';
import { ParkingsModule } from './parkings/parkings.module';
import { BanksModule } from './banks/banks.module';
import { BankAccountsModule } from './bank-accounts/bank-accounts.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CondominiumsModule,
    GroupsModule,
    TowersModule,
    DepartmentsModule,
    AgreementsModule,
    ParkingsModule,
    BanksModule,
    BankAccountsModule
  ]
})
export class AdminModule { }
