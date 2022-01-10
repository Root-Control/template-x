import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountsCreateOrUpdateComponent } from './bank-accounts-create-or-update/bank-accounts-create-or-update.component';
import { BankAccountsListComponent } from './bank-accounts-list/bank-accounts-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromBankAccounts from './bank-accounts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BankAccountsEffects } from './bank-accounts.effects';



@NgModule({
  declarations: [
    BankAccountsCreateOrUpdateComponent,
    BankAccountsListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBankAccounts.bankAccountsFeatureKey, fromBankAccounts.reducer),
    EffectsModule.forFeature([BankAccountsEffects])
  ]
})
export class BankAccountsModule { }
