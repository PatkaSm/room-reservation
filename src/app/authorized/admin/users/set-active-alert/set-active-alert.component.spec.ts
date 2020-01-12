import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetActiveAlertComponent } from './set-active-alert.component';

describe('SetActiveAlertComponent', () => {
  let component: SetActiveAlertComponent;
  let fixture: ComponentFixture<SetActiveAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetActiveAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetActiveAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
