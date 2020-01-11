import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserAlertComponent } from './delete-user-alert.component';

describe('DeleteUserAlertComponent', () => {
  let component: DeleteUserAlertComponent;
  let fixture: ComponentFixture<DeleteUserAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
