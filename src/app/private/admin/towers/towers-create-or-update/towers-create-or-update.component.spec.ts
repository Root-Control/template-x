import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowersCreateOrUpdateComponent } from './towers-create-or-update.component';

describe('TowersCreateOrUpdateComponent', () => {
  let component: TowersCreateOrUpdateComponent;
  let fixture: ComponentFixture<TowersCreateOrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowersCreateOrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TowersCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
