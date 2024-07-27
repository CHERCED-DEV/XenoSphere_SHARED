/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CxCardComponent } from './cx-card.component';

describe('CxCardComponent', () => {
  let component: CxCardComponent;
  let fixture: ComponentFixture<CxCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
