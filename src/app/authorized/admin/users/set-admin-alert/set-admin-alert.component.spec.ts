import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAdminAlertComponent } from './set-admin-alert.component';

describe('SetAdminAlertComponent', () => {
  let component: SetAdminAlertComponent;
  let fixture: ComponentFixture<SetAdminAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAdminAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAdminAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
