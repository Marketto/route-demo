import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingStepperComponent } from './routing-stepper.component';

describe('RoutingStepperComponent', () => {
  let component: RoutingStepperComponent;
  let fixture: ComponentFixture<RoutingStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
