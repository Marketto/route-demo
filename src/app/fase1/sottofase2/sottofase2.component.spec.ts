import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sottofase2Component } from './sottofase2.component';

describe('Sottofase2Component', () => {
  let component: Sottofase2Component;
  let fixture: ComponentFixture<Sottofase2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sottofase2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sottofase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
