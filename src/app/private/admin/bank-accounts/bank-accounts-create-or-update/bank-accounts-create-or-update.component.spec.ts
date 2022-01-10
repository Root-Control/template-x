import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountsCreateOrUpdateComponent } from './bank-accounts-create-or-update.component';

describe('BankAccountsCreateOrUpdateComponent', () => {
  let component: BankAccountsCreateOrUpdateComponent;
  let fixture: ComponentFixture<BankAccountsCreateOrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountsCreateOrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountsCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
