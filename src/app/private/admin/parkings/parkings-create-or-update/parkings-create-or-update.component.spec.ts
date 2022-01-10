import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingsCreateOrUpdateComponent } from './parkings-create-or-update.component';

describe('ParkingsCreateOrUpdateComponent', () => {
  let component: ParkingsCreateOrUpdateComponent;
  let fixture: ComponentFixture<ParkingsCreateOrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingsCreateOrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingsCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
