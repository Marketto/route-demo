import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sottofase3Component } from './sottofase3.component';

describe('Sottofase3Component', () => {
  let component: Sottofase3Component;
  let fixture: ComponentFixture<Sottofase3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sottofase3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sottofase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
