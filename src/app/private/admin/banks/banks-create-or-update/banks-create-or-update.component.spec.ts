import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksCreateOrUpdateComponent } from './banks-create-or-update.component';

describe('BanksCreateOrUpdateComponent', () => {
  let component: BanksCreateOrUpdateComponent;
  let fixture: ComponentFixture<BanksCreateOrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanksCreateOrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
