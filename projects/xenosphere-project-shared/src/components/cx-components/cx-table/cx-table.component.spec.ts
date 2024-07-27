/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CxTableComponent } from './cx-table.component';

describe('CxTableComponent', () => {
  let component: CxTableComponent;
  let fixture: ComponentFixture<CxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
