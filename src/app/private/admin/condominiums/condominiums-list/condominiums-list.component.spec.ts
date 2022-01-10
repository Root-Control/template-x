import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominiumsListComponent } from './condominiums-list.component';

describe('CondominiumsListComponent', () => {
  let component: CondominiumsListComponent;
  let fixture: ComponentFixture<CondominiumsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominiumsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominiumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
