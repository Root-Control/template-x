import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsCreateOrUpdateComponent } from './groups-create-or-update.component';

describe('GroupsCreateOrUpdateComponent', () => {
  let component: GroupsCreateOrUpdateComponent;
  let fixture: ComponentFixture<GroupsCreateOrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsCreateOrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
