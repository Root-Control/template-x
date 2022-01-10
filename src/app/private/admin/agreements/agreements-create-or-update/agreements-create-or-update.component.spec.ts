import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementsCreateOrUpdateComponent } from './agreements-create-or-update.component';

describe('AgreementsCreateOrUpdateComponent', () => {
  let component: AgreementsCreateOrUpdateComponent;
  let fixture: ComponentFixture<AgreementsCreateOrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementsCreateOrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementsCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
