import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowersListComponent } from './towers-list.component';

describe('TowersListComponent', () => {
  let component: TowersListComponent;
  let fixture: ComponentFixture<TowersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TowersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
