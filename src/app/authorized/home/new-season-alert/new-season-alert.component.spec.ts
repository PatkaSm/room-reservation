import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSeasonAlertComponent } from './new-season-alert.component';

describe('NewSeasonAlertComponent', () => {
  let component: NewSeasonAlertComponent;
  let fixture: ComponentFixture<NewSeasonAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSeasonAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSeasonAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
