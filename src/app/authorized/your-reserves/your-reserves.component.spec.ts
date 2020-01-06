import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourReservesComponent } from './your-reserves.component';

describe('YourReservesComponent', () => {
  let component: YourReservesComponent;
  let fixture: ComponentFixture<YourReservesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourReservesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
