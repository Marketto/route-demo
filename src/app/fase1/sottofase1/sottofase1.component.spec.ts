import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sottofase1Component } from './sottofase1.component';

describe('Sottofase1Component', () => {
  let component: Sottofase1Component;
  let fixture: ComponentFixture<Sottofase1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sottofase1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sottofase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
