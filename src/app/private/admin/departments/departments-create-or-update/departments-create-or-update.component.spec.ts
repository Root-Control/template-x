import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsCreateOrUpdateComponent } from './departments-create-or-update.component';

describe('DepartmentsCreateOrUpdateComponent', () => {
  let component: DepartmentsCreateOrUpdateComponent;
  let fixture: ComponentFixture<DepartmentsCreateOrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsCreateOrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
