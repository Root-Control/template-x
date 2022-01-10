import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominiumsCreateOrUpdateComponent } from './condominiums-create-or-update.component';

describe('CondominiumsCreateOrUpdateComponent', () => {
  let component: CondominiumsCreateOrUpdateComponent;
  let fixture: ComponentFixture<CondominiumsCreateOrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominiumsCreateOrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominiumsCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
